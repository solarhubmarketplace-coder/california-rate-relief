export function SdgeRateTable() {
  return (
    <section id="tou-dr1-rates">
      <h2>TOU-DR1 prices: read the right column</h2>
      <p className="mb-4">
        SDG&amp;E’s pricing chooser lists the following rounded TOU-DR1 energy
        prices effective August 1, 2026. The on-peak period is 4–9 p.m. every
        day. These figures exclude the monthly Base Services Charge and do not
        apply to every plan or discount category.
      </p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="p-3 text-left font-semibold">
            TOU-DR1 · cents per kWh · checked September 10, 2026
          </caption>
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Customer and usage band</th>
              <th className="p-3">Super off-peak</th>
              <th className="p-3">Off-peak</th>
              <th className="p-3">On-peak</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Non-CCA: generation + delivery, up to 130% baseline',
                '26.7¢',
                '35.7¢',
                '58.4¢',
              ],
              [
                'Non-CCA: generation + delivery, above 130% baseline',
                '37.4¢',
                '46.4¢',
                '69.1¢',
              ],
              [
                'CCA: delivery only, up to 130% baseline',
                '22.5¢',
                '22.5¢',
                '22.5¢',
              ],
              [
                'CCA: delivery only, above 130% baseline',
                '33.2¢',
                '33.2¢',
                '33.2¢',
              ],
            ].map((row) => (
              <tr key={row[0]} className="border-t">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th scope="row" key={i} className="p-3 align-top">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="p-3">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        A CCA customer must add the generation charges from the CCA. A
        delivery-only number cannot be compared with a combined
        generation-and-delivery price. Check your baseline allowance and billing
        dates against the{' '}
        <a
          className="text-emerald-800 underline"
          href="https://www.sdge.com/residential/pricing-plans"
        >
          current plan chooser
        </a>{' '}
        and{' '}
        <a
          className="text-emerald-800 underline"
          href="https://www.sdge.com/total-electric-rates"
        >
          complete rate schedules
        </a>
        .
      </p>
      <p className="mt-3">
        These rates help explain the bill. They are not inserted into the
        calculator, which uses the bill and proposal amounts you enter.
      </p>
    </section>
  );
}
