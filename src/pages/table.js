import React, { useState } from 'react';

const Table = ({ data }) => {
    const [sortedData, setSortedData] = useState(data);
    const [filterTerm, setFilterTerm] = useState('');
  
    const handleSort = (column) => {
      const sorted = [...sortedData].sort((a, b) => {
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
      });
      setSortedData(sorted);
    };
  
    const handleFilter = (e) => {
      setFilterTerm(e.target.value);
    };
  
    const filteredData = sortedData.filter((row) =>
      row.Members.toLowerCase().includes(filterTerm.toLowerCase())
    );
  
    return (
      <>
        <div className="mb-2">
            <button className="absolute right-122 top-37 text-sm font-medium text-gray-dark hover:text-white hover:bg-gray-dark p-2"
            onClick={() => sortedData}
            >
            Sort
        </button>
        <button
            className="absolute right-32 top-37 text-sm font-medium text-gray-dark hover:text-white hover:bg-gray-dark p-2"
        >
            Filter
        </button>
        </div>
        <table className="table-auto w-full text-left border-t-2 border-gray-300 rounded-lg bg-white">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('Members')}>
                Members
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('IDK')}>
                IDK
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('JoiningDate')}>
                Joining Date
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('Department')}>
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id} className="bg-gray-100">
                <td className="p-4">
                    <img
                    src={row.ProfilePicture}
                    alt={`Profile picture of ${row.Members}`}
                    className="h-12 w-12 mr-4 rounded-full"
                    />
                    {row.Members}
                </td>
                <td className="border px-4 py-2">{row.IDK}</td>
                <td className="border px-4 py-2">{row.JoiningDate}</td>
                <td className="border px-4 py-2">{row.Department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
  
  export default Table;