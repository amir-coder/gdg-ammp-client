import React from "react";
import Link from "next/link";

const BoardTable = ({ title, data, viewAllHref }) => {
  return (
    <div className="basic-table bg-white md:w-1/2 mb-8 md:mb-0 rounded-lg">
      <div className="table-head mb-3 flex justify-between p-4 items-center">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        {viewAllHref && (
          <Link className="all-link" href={viewAllHref}>
            <p className="text-sm font-semibold ">View all</p>
          </Link>
        )}
      </div>
      {data.map((item, index) => (
        <div
          className={`table-item flex justify-between p-4 ${
            index !== data.length - 1 ? "border-b-2" : ""
          }`}
        >
          <p className="text-sm font-semibold">{item.name}</p>
          <p className="text-sm font-semibold text-gray-300">
            {item.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BoardTable;