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
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
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
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column}
                  className="border px-3 py-2"
                >
                  {String(row[column])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}