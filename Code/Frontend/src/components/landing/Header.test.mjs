import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const outputDirectory = await mkdtemp(path.join(tmpdir(), "crr-header-"));
const outputPath = path.join(outputDirectory, "header.mjs");

await build({
  entryPoints: [fileURLToPath(new URL("./Header.tsx", import.meta.url))],
  outfile: outputPath,
  bundle: true,
  platform: "node",
  format: "esm",
  jsx: "automatic",
  plugins: [
    {
      name: "header-dependency-stubs",
      setup(buildApi) {
        buildApi.onResolve(
          {
            filter:
              /^(next\/image|next\/link|next\/navigation|@\/components\/ui\/button|@\/lib\/intake-routing)$/,
          },
          (args) => ({ path: args.path, namespace: "stub" }),
        );
        buildApi.onLoad({ filter: /.*/, namespace: "stub" }, (args) => {
          if (args.path === "next/navigation") {
            return {
              contents: "export const usePathname = () => '/';",
              loader: "js",
            };
          }
          if (args.path === "@/lib/intake-routing") {
            return {
              contents:
                "export const intakeHrefForPath = () => '/#qualify'; export const isCommercialIntentPath = () => false;",
              loader: "js",
            };
          }
          if (args.path === "@/components/ui/button") {
            return {
              contents: "export const Button = ({children}) => children;",
              loader: "jsx",
            };
          }
          return {
            contents: "export default ({children}) => children ?? null;",
            loader: "jsx",
          };
        });
      },
    },
  ],
});

const { HEADER_GUIDE_LINKS, headerInquiryLabel } = await import(
  `${pathToFileURL(outputPath).href}?v=${Date.now()}`
);

test.after(async () => {
  await rm(outputDirectory, { recursive: true, force: true });
});

test("header menu exposes the six approved guide destinations", () => {
  assert.deepEqual(
    HEADER_GUIDE_LINKS.map(({ href, label }) => [href, label]),
    [
      ["/solar-cost", "Cost"],
      ["/best-solar-companies-california", "Companies"],
      ["/california-utility-rate-tracker", "Bills & rates"],
      ["/blog", "Guides"],
      ["/commercial-solar", "Commercial"],
      ["/tools/solar-panel-calculator", "Tools"],
    ],
  );
});

test("inquiry labels describe the referral action without eligibility wording", () => {
  assert.equal(headerInquiryLabel(false), "Solar Inquiry");
  assert.equal(headerInquiryLabel(false, true), "Inquiry");
  assert.equal(headerInquiryLabel(true), "Commercial Inquiry");
  assert.equal(headerInquiryLabel(true, true), "Commercial");
});
