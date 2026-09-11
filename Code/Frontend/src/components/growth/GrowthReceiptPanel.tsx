"use client";
import { useEffect, useRef, useState } from "react";
import axiosClient from "@/lib/axios";
import { pacificMonthRange, type GrowthReport } from "@/lib/growth-report";
export function GrowthReportView({ report }: { report: GrowthReport }) {
  const rows = report.months;
  return (
    <div className="space-y-4">
      <p className="text-sm">
        Pacific calendar month. Count each organic contact once per month.
        Provider acceptance and provider delivery are intermediate signals;
        inbox evidence establishes the received-by-owner count. Stored contacts
        use the submission month; inbox receipts use the actual receipt month
        and can include earlier submissions. These totals are not a
        conversion-rate numerator and denominator.
      </p>
      <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm">
        Coverage: these counts use durable submission records.{" "}
        {report.legacy_leads_without_submission ?? "Unreported"} older lead
        records in this period have no submission ID and require separate
        reconciliation. Durable capture first observed:{" "}
        {report.durable_capture_started_at || "unavailable"}. Historical missing
        records are not zero conversions.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          [
            "Unique organic stored",
            rows.reduce((n, r) => n + r.unique_organic_stored, 0),
          ],
          [
            "Owner notification accepted",
            rows.reduce((n, r) => n + r.owner_notification_accepted, 0),
          ],
          [
            "Provider delivery confirmed",
            rows.reduce((n, r) => n + r.provider_delivery_confirmed, 0),
          ],
          [
            "Owner inbox receipt confirmed",
            rows.reduce((n, r) => n + r.receipt_confirmed, 0),
          ],
          [
            "Failed without receipt/delivery",
            rows.reduce((n, r) => n + r.failed, 0),
          ],
          [
            "Stored contacts without inbox evidence",
            rows.reduce((n, r) => n + r.unknown, 0),
          ],
          [
            "Repeated contact submissions",
            rows.reduce((n, r) => n + r.repeated_contact_submissions, 0),
          ],
          ["Unknown origin", report.unknown_origin],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border bg-white p-4">
            <p className="text-sm text-slate-600">{label}</p>
            <p className="mt-1 text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-600">
        All stored submissions: {report.stored_submissions}. Tests excluded:{" "}
        {report.excluded_tests}. Spam excluded: {report.excluded_spam}. Other
        observed channels: {report.non_organic}. Retries using the same
        submission ID create no additional row. No credit, appointment, referral
        or sale requirement.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <caption className="text-left font-semibold">
            Original organic landing pages
          </caption>
          <thead>
            <tr>
              <th className="p-2">Page</th>
              <th className="p-2">Submission month: stored unique</th>
              <th className="p-2">Receipt month: inbox confirmed</th>
            </tr>
          </thead>
          <tbody>
            {report.landing_pages.map((r) => (
              <tr className="border-t" key={r.calendar_month + r.landing_page}>
                <td className="break-all p-2">{r.landing_page}</td>
                <td className="p-2">{r.unique_organic_stored}</td>
                <td className="p-2">{r.receipt_confirmed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500">
        Report interval: {report.from} through {report.to_exclusive}{" "}
        (exclusive). Stored contacts without inbox evidence may also appear in
        provider-delivery or failure totals; those states overlap. Receipt
        evidence may arrive later. A complete calendar-month result requires the
        month to have ended. Current-month values are month to date, not a
        forecast.
      </p>
    </div>
  );
}
export function GrowthReceiptPanel() {
  const [month, setMonth] = useState(() => {
    const p = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
    }).formatToParts(new Date());
    return `${p.find((x) => x.type === "year")?.value}-${p.find((x) => x.type === "month")?.value}`;
  });
  const [report, setReport] = useState<GrowthReport | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [receipt, setReceipt] = useState({ id: "", reference: "", at: "" });
  const loadSequence = useRef(0);
  async function load() {
    const sequence = ++loadSequence.current;
    setBusy(true);
    setError("");
    setReport(null);
    try {
      const r = pacificMonthRange(month);
      const response = (await axiosClient.get("/staff/growth-scorecard", {
        params: r,
      })) as unknown as { data: GrowthReport };
      if (sequence === loadSequence.current) setReport(response.data);
    } catch (cause) {
      if (sequence !== loadSequence.current) return;
      setReport(null);
      setError(
        cause instanceof Error
          ? cause.message
          : "Could not load receipt measurement.",
      );
    } finally {
      if (sequence === loadSequence.current) setBusy(false);
    }
  }
  useEffect(() => {
    void load();
  }, [month]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <section className="rounded-xl border bg-slate-50 p-5">
      <h2 className="text-xl font-bold">
        Organic submissions and owner receipts
      </h2>
      <div className="my-4 flex flex-wrap items-end gap-3">
        <label className="text-sm">
          Pacific month
          <input
            type="month"
            className="ml-2 rounded border p-2"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
        <button
          disabled={busy}
          onClick={load}
          className="rounded border bg-white px-3 py-2 text-sm"
        >
          Refresh counts
        </button>
      </div>
      {error && (
        <p role="alert" className="my-3 text-sm text-red-800">
          {error} Receipt measurement requires the reviewed migration and staff
          access; unavailable counts are not zero.
        </p>
      )}
      {report && <GrowthReportView report={report} />}
      <details className="mt-5 border-t pt-4">
        <summary className="cursor-pointer font-semibold">
          Record a verified business inbox receipt
        </summary>
        <p className="my-3 text-sm">
          After checking solarhubmarketplace@gmail.com, enter the matching
          submission ID and inbox message reference. This records evidence only
          and sends no message.
        </p>
        <form
          className="grid gap-3 sm:grid-cols-2"
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            setError("");
            try {
              await axiosClient.post(
                `/staff/submissions/${encodeURIComponent(receipt.id)}/receipt`,
                {
                  evidence_reference: receipt.reference,
                  receipt_at: new Date(receipt.at).toISOString(),
                },
              );
              setReceipt({ id: "", reference: "", at: "" });
              await load();
            } catch (cause) {
              setError(
                cause instanceof Error
                  ? cause.message
                  : "Receipt evidence was not saved.",
              );
            } finally {
              setBusy(false);
            }
          }}
        >
          <label className="text-sm">
            Submission UUID
            <input
              required
              className="mt-1 w-full rounded border p-2"
              value={receipt.id}
              onChange={(e) => setReceipt({ ...receipt, id: e.target.value })}
            />
          </label>
          <label className="text-sm">
            Inbox message reference
            <input
              required
              minLength={3}
              maxLength={300}
              className="mt-1 w-full rounded border p-2"
              value={receipt.reference}
              onChange={(e) =>
                setReceipt({ ...receipt, reference: e.target.value })
              }
            />
          </label>
          <label className="text-sm">
            Receipt time (your local timezone)
            <input
              required
              type="datetime-local"
              className="mt-1 w-full rounded border p-2"
              value={receipt.at}
              onChange={(e) => setReceipt({ ...receipt, at: e.target.value })}
            />
          </label>
          <button
            disabled={busy}
            className="self-end rounded-lg bg-slate-900 px-4 py-3 text-white"
          >
            Save receipt evidence
          </button>
        </form>
      </details>
    </section>
  );
}
