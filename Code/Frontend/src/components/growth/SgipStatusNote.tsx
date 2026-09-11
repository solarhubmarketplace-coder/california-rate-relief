import Link from 'next/link';
export function SgipStatusNote() {
  return (
    <aside className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm text-slate-800">
      <p className="font-semibold">SGIP correction · September 10, 2026</p>
      <p className="mt-2">
        Earlier rebate amounts and general eligibility statements on this page
        should not be used as a current funding offer. The official tracker
        shows Small Residential Storage, ratepayer-funded Residential Solar and
        Storage Equity, Equity Resiliency, Large-Scale Storage and
        Non-Residential Storage Equity closed in the CSE, SCE, SCG and PG&amp;E
        columns. Some residential AB 209 categories are open or waitlisted. An
        administrator column does not establish eligibility for every electric
        customer.
      </p>
      <p className="mt-2">
        Check the exact category in the{' '}
        <a
          className="underline"
          href="https://www.selfgenca.com/home/program_metrics/"
        >
          official tracker
        </a>{' '}
        and confirm project eligibility and any reservation with the
        administrator. The{' '}
        <Link
          className="underline"
          href="/battery/sgip-battery-rebate-california"
        >
          current residential SGIP guide
        </Link>{' '}
        distinguishes the categories. A waitlist or remaining balance does not
        promise a rebate.
      </p>
    </aside>
  );
}
