import React from "react";

function HeaderSort({ tkey, label, field, direction, handleSort }) {
  return (
    <>
      <div
        className="inline-flex cursor-pointer w-full justify-between"
        onClick={() => handleSort(tkey, direction)}
      >
        <span>{label}</span>

        {/* Sorter Icon */}
        {/* DESC Icon */}
        

        {/* ASC Icon */}
        {field === tkey && direction === "asc" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
            />
          </svg>
        )}
      </div>
    </>
  );
}

function Header({ data, handleSort, direction, field } = {}) {
  return (
    <>
      <thead className="hidden bg-sky-900 md:table-header-group text-white">
        <tr className="block md:table-row">
          {data.map((row) => (
            <th
              scope="col"
              key={row.key}
              className={`py-6 px-4 block md:table-cell font-semibold text-xs uppercase  `}
            >
              {!row.sort ? (
                <span>{row.label}</span>
              ) : (
                <HeaderSort
                  label={row.label}
                  handleSort={handleSort}
                  tkey={row.key}
                  direction={direction}
                  field={field}
                />
              )}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}

export default Header;
