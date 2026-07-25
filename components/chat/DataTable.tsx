type Props = {
  rows: any[];
};

export default function DataTable({ rows }: Props) {
  if (rows.length === 0) {
    return null;
  }

  const columns = Object.keys(rows[0]);

  return (
    <div className="mt-4 overflow-x-auto">
<table className="min-w-full overflow-hidden rounded-xl">
<thead className="bg-blue-600 text-white">          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="border px-3 py-2 text-left"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
    key={index}
    className="border-b hover:bg-blue-50"
>
              {columns.map((column) => (
                <td
                  key={column}
                  className="border px-3 py-2"
                >
                  {column === "status" ? (
  <span
    className={`rounded-full px-3 py-1 text-xs font-semibold ${
      row[column] === "Open"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {row[column]}
  </span>
) : (
  String(row[column])
)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}