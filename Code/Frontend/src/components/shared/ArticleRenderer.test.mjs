import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const outputDirectory = await mkdtemp(path.join(tmpdir(), "article-renderer-"));
const outputPath = path.join(outputDirectory, "article-renderer.mjs");
const componentPath = fileURLToPath(new URL("./ArticleRenderer.tsx", import.meta.url));
const componentSource = await readFile(componentPath, "utf8");

await build({
  entryPoints: [componentPath],
  outfile: outputPath,
  bundle: true,
  platform: "node",
  format: "esm",
  jsx: "automatic",
  plugins: [{
    name: "article-renderer-stubs",
    setup(buildApi) {
      buildApi.onResolve({ filter: /^(next\/link|lucide-react)$/ }, (args) => ({ path: args.path, namespace: "stub" }));
      buildApi.onLoad({ filter: /.*/, namespace: "stub" }, (args) => ({
        contents: args.path === "next/link"
          ? "export default ({children}) => children;"
          : "export const ArrowRight = () => null; export const AlertTriangle = () => null;",
        loader: "jsx",
      }));
    },
  }],
});

const { articleAnchorId, uniqueArticleAnchors, articleWordCount, midArticleIndex } = await import(`${pathToFileURL(outputPath).href}?v=${Date.now()}`);

test.after(async () => rm(outputDirectory, { recursive: true, force: true }));

test("section headings become stable native-link IDs", () => {
  assert.equal(articleAnchorId("PG&E: Rates & Plans"), "pg-e-rates-plans");
  assert.equal(articleAnchorId("  2026 Rate Comparison  "), "2026-rate-comparison");
});

test("duplicate headings receive unique deterministic IDs", () => {
  assert.deepEqual(uniqueArticleAnchors(["Costs", "Costs", "Costs!"]), ["costs", "costs-2", "costs-3"]);
});

test("literal numeric suffixes cannot collide with generated suffixes", () => {
  assert.deepEqual(uniqueArticleAnchors(["A", "A", "A-2"]), ["a", "a-2", "a-2-2"]);
});

test("the source target belongs to the actual conditional source list", () => {
  const relatedBlock = componentSource.indexOf("related && related.length > 0");
  const sourceBlock = componentSource.lastIndexOf("page.sources.length > 0 &&");
  const sourceTarget = componentSource.indexOf('id="sources"');
  assert.ok(relatedBlock > -1 && relatedBlock < sourceBlock);
  assert.ok(sourceBlock < sourceTarget);
});

test("the existing introduction stays ahead of contents and stat cards", () => {
  const intro = componentSource.indexOf("<Paragraphs text={page.intro}");
  const contents = componentSource.indexOf("<ArticleContents items={contents}");
  const stats = componentSource.indexOf("page.keyStats.length > 0");
  assert.ok(intro > -1 && intro < contents && contents < stats);
});

test("the quick check slot sits after the introduction and before the contents", () => {
  const intro = componentSource.indexOf("<Paragraphs text={page.intro}");
  const quickCheck = componentSource.indexOf("{quickCheck}");
  const contents = componentSource.indexOf("<ArticleContents items={contents}");
  assert.ok(intro > -1 && intro < quickCheck && quickCheck < contents);
});

test("the mid-article ask goes halfway through the sections, never at an end", () => {
  assert.equal(midArticleIndex(0), -1);
  assert.equal(midArticleIndex(1), -1);
  assert.equal(midArticleIndex(2), 0);
  assert.equal(midArticleIndex(7), 3);
  assert.equal(midArticleIndex(8), 3);
});

test("the inquiry slot replaces the link-only card, so the page keeps one closing ask", () => {
  assert.ok(componentSource.includes("{inquiry ?? <CtaCard"));
});

test("article word count covers the prose a reader scrolls through", () => {
  const page = {
    intro: "one two three",
    sections: [{ heading: "Four", body: "five six" }],
    whenThisIsWrong: "seven",
    faqs: [{ question: "eight?", answer: "nine ten" }],
    bottomLine: "eleven",
  };
  assert.equal(articleWordCount(page), 11);
});
