import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const componentPath = fileURLToPath(
  new URL("./SolarFinancingComparison.tsx", import.meta.url),
);
const outputDirectory = await mkdtemp(
  path.join(tmpdir(), "solar-financing-comparison-"),
);
const outputPath = path.join(outputDirectory, "component.mjs");

await build({
  entryPoints: [componentPath],
  outfile: outputPath,
  bundle: true,
  platform: "node",
  format: "esm",
  jsx: "automatic",
  plugins: [
    {
      name: "stub-tool-report-request",
      setup(buildApi) {
        buildApi.onResolve({ filter: /^\.\/ToolReportRequest$/ }, () => ({
          path: "tool-report-request",
          namespace: "stub",
        }));
        buildApi.onLoad({ filter: /.*/, namespace: "stub" }, () => ({
          contents: "export const ToolReportRequest = () => null;",
          loader: "js",
        }));
      },
    },
  ],
});

const { buildFinancingReportContext, calculateSelectedFinancingComparison } =
  await import(
    `${new URL(`file:///${outputPath.replaceAll("\\", "/")}`)}?v=${Date.now()}`
  );

test.after(async () => {
  await rm(outputDirectory, { recursive: true, force: true });
});

const values = {
  horizonMonths: "17",
  cashUpfrontPrice: "20000",
  loanUpfrontCost: "500",
  loanMonthlyPayment: "200",
  loanTermMonths: "31",
  leaseUpfrontCost: "",
  leaseMonthlyPayment: "",
  leaseEscalatorPercent: "",
  leaseTermMonths: "",
  ppaAnnualProductionKwh: "",
  ppaInitialPricePerKwh: "",
  ppaEscalatorPercent: "",
  ppaTermMonths: "",
};

test("cash and loan calculate while unselected lease and PPA fields are blank", () => {
  const result = calculateSelectedFinancingComparison(values, ["cash", "loan"]);
  assert.deepEqual(result.selectedOptions, ["cash", "loan"]);
  assert.equal(result.cash.knownCostThroughHorizon, 20000);
  assert.equal(result.loan.knownCostThroughHorizon, 3900);
  assert.equal(result.lease, undefined);
  assert.equal(result.ppa, undefined);
});

test("unselected saved values do not leak into calculations", () => {
  const withSavedUnselectedValues = {
    ...values,
    leaseUpfrontCost: "-999",
    leaseMonthlyPayment: "999999",
    leaseEscalatorPercent: "999",
    leaseTermMonths: "not a number",
    ppaAnnualProductionKwh: "-1",
    ppaInitialPricePerKwh: "999",
    ppaEscalatorPercent: "999",
    ppaTermMonths: "0",
  };
  assert.deepEqual(
    calculateSelectedFinancingComparison(withSavedUnselectedValues, [
      "cash",
      "loan",
    ]),
    calculateSelectedFinancingComparison(values, ["cash", "loan"]),
  );
});

test("selected blank or invalid inputs are rejected", () => {
  assert.throws(
    () =>
      calculateSelectedFinancingComparison(values, ["cash", "loan", "lease"]),
    /lease upfront cost/,
  );
  assert.throws(
    () =>
      calculateSelectedFinancingComparison({ ...values, loanTermMonths: "0" }, [
        "cash",
        "loan",
      ]),
    /Loan term/,
  );
});

test("report context names only the selected proposals", () => {
  assert.deepEqual(buildFinancingReportContext(["cash", "loan"]), {
    topic: "Cash vs loan financing comparison",
    label: "Ask about this Cash vs loan comparison",
  });
});
