"use client";

type Props = {
  rows: any[];
};

export default function DataTable({
  rows,
}: Props) {
  if (!rows || rows.length === 0) return null;

  const headers = Object.keys(rows[0]);

  return (
    <div
      className="
      overflow-hidden
      rounded-[28px]
      border
      border-[var(--border)]
      bg-[var(--surface)]
      shadow-2xl
    "
    >
      <div className="overflow-x-auto">

        <table className="min-w-full">

          {/* Header */}

          <thead
            className="
            sticky
            top-0
            z-10
            border-b
            border-[var(--border)]
            bg-gradient-to-r
            from-[var(--surface-2)]
            to-slate-900/60
            backdrop-blur-lg
          "
          >
            <tr>

              {headers.map((header) => (
                <th
                  key={header}
                  className="
                  px-6
                  py-5
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-indigo-300
                "
                >
                  {header}
                </th>
              ))}

            </tr>
          </thead>

          {/* Body */}

          <tbody>

            {rows.map((row, index) => (

              <tr
                key={index}
                className="
                border-t
                border-[var(--border)]
                transition-all
                duration-300
                hover:bg-indigo-500/5
                hover:shadow-inner
              "
              >

                {headers.map((header) => {

                  const value = row[header];

                  /* Status */

                  if (header === "status") {

                    return (
                      <td
                        key={header}
                        className="px-6 py-5"
                      >
                        <span
                          className={`rounded-full px-4 py-2 text-xs font-semibold ${
                            value === "Open"
                              ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                              : "border border-rose-500/20 bg-rose-500/10 text-rose-300"
                          }`}
                        >
                          {value}
                        </span>
                      </td>
                    );

                  }

                  /* Department */

                  if (header === "department") {

                    return (
                      <td
                        key={header}
                        className="px-6 py-5"
                      >
                        <span
                          className="
                          rounded-full
                          border
                          border-indigo-500/20
                          bg-indigo-500/10
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-indigo-300
                        "
                        >
                          {value}
                        </span>
                      </td>
                    );

                  }

                  /* Band */

                  if (header === "band") {

                    return (
                      <td
                        key={header}
                        className="px-6 py-5"
                      >
                        <span
                          className="
                          rounded-full
                          border
                          border-violet-500/20
                          bg-violet-500/10
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-violet-300
                        "
                        >
                          {value}
                        </span>
                      </td>
                    );

                  }

                  /* Title */

                  if (header === "title") {

                    return (
                      <td
                        key={header}
                        className="
                        px-6
                        py-5
                        font-semibold
                        text-[var(--text)]
                      "
                      >
                        {value}
                      </td>
                    );

                  }

                  /* Recruiter */

                  if (header === "recruiter") {

                    return (
                      <td
                        key={header}
                        className="
                        px-6
                        py-5
                        font-medium
                        text-indigo-300
                      "
                      >
                        {value}
                      </td>
                    );

                  }

                  return (
                    <td
                      key={header}
                      className="
                      px-6
                      py-5
                      text-[15px]
                      text-[var(--text)]
                    "
                    >
                      {value}
                    </td>
                  );

                })}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}