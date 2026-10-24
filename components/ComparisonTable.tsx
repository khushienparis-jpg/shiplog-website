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
    <div className="overflow-x-auto rounded-[20px] border border-line bg-white">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-mist">
          <tr>
            {headers.map((h, i) => (
              <th key={i} scope="col" className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.02em] text-stone sm:px-6">
                {h || <span className="sr-only">Row</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-t border-line">
              {row.map((cell, c) =>
                rowHeaders && c === 0 ? (
                  <th key={c} scope="row" className="px-4 py-4 font-semibold text-ink sm:px-6">
                    {cell}
                  </th>
                ) : (
                  <td key={c} className={`px-4 py-4 align-top sm:px-6 ${c === row.length - 1 && headers[c] === "Shiplog" ? "font-medium text-ink" : "text-graphite"}`}>
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
