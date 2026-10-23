export function ComparisonTable({
  caption,
  headers,
  rows,
  rowHeaders = false,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
  rowHeaders?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-wf-box">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-wf-fill">
          <tr>
            {headers.map((h, i) => (
              <th key={i} scope="col" className="px-4 py-3 font-semibold sm:px-6">
                {h || <span className="sr-only">Row</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-t border-wf-box">
              {row.map((cell, c) =>
                rowHeaders && c === 0 ? (
                  <th key={c} scope="row" className="px-4 py-4 font-semibold sm:px-6">
                    {cell}
                  </th>
                ) : (
                  <td key={c} className="px-4 py-4 align-top sm:px-6">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
