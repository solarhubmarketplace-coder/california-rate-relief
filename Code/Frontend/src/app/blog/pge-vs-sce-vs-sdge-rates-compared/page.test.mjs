import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const source = await readFile(
  fileURLToPath(new URL("./page.tsx", import.meta.url)),
  "utf8",
);

test("every native contents link has one unique target", () => {
  const ids = [...source.matchAll(/\bid='([^']+)'/g)].map((match) => match[1]);
  const targets = [...source.matchAll(/href='#([^']+)'/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const target of targets) {
    assert.equal(ids.filter((id) => id === target).length, 1, `#${target}`);
  }
});

test("quick answer appears before the long introduction and commercial note", () => {
  const quickAnswer = source.indexOf("Quick answer");
  const introduction = source.indexOf("SDG&amp;E had the highest residential average");
  const commercialNote = source.indexOf("Related commercial project:");
  assert.ok(quickAnswer > -1 && quickAnswer < introduction);
  assert.ok(introduction < commercialNote);
});
