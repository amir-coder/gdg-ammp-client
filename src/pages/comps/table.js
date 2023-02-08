import React, { useState } from 'react';
import Modal from 'react-modal';

const Table = ({ data }) => {
  const [sortedData, setSortedData] = useState(data)
  const [filterTerm, setFilterTerm] = useState('')
  const [sortOrder, setSortOrder] = useState({ Members: 'asc' })

 //sort 
  const handleSort = (column) => {
    const currentSortOrder = sortOrder[column]
    const newSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc'
    setSortOrder({ [column]: newSortOrder })
    const sorted = [...sortedData].sort((a, b) => {
      if (newSortOrder === 'asc') {
        if (a[column] < b[column]) return -1
        if (a[column] > b[column]) return 1
        return 0
      } else {
        if (a[column] > b[column]) return -1
        if (a[column] < b[column]) return 1
        return 0
      }
    })
    setSortedData(sorted);
  }
  // filter
  const handleFilter = (e) => {
    setFilterTerm(e.target.value)
  }
  
  const filteredData = sortedData.filter((row) =>
    row.Members.toLowerCase().includes(filterTerm.toLowerCase())
  )
  const [showInput, setShowInput] = useState(false)
 // Idk why this is not working  
  const departmentColors = {
    'Events': '#29CC97',
    'dev': '#FEC400',
    'ui/ux': '#F12B2C'
  }
  
  const getDepartmentColor = (department) => {
    return departmentColors[department] || '#F12B2C';
  }
  
  const TableRow = ({ row }) => {
    const departmentColor = getDepartmentColor(row.Department);
  }
//
const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="p-2">
    <div className="border-2 border-gray-200 p-3 rounded-lg">
    <div className="rounded p-2 divide-y-0">
    <div className="flex justify-between items-center">
      <h1 className=" font-bold text-black text-lg ">
      All members
      </h1>
      <div className="flex items-center justify-start ">
  <div className="mb-2 mx-1">
    {showInput ? (
      <input
        className="w-64 border border-gray-400 rounded-lg py-2 px-4 text-sm font-medium text-gray-dark hover:text-white hover:bg-gray-dark"
        value={filterTerm}
        onChange={handleFilter}
        placeholder="Filter by Member Name"
      />
    ) : (
      <button
        className=""
        onClick={() => setShowInput(true)}
      >
        Filter
      </button>
    )}
  </div>
  <div className="mb-2 mx-1">
    <button onClick={() => setIsOpen(!isOpen)}>Sort</button>
    {isOpen && (
      <ul className="absolute bg-white border border-gray-400 py-2 top-13 right-1 ">
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSort('Members')}>by name</li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSort('IDK')}>by IDK</li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSort('JoiningDate')}>by joined date</li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSort('Department')}>by department</li>
      </ul>
    )}
  </div>
</div>

    </div>
      <table className="table-auto w-full text-left border-t-2 rounded-lg bg-white border-0 divide-y-2 devide-gray-600">
        <thead>
          <tr className=" text-gray-500">
            <th className="px-4 py-2 cursor-pointer border-0" onClick={() => handleSort('Members')}>
              Full name
              {sortOrder.Members === 'asc' ? (
                <i className="fas fa-sort-up ml-2 text-gray-300"></i>
              ) : sortOrder.Members === 'desc' ? (
                <i className="fas fa-sort-down ml-2 text-gray-300"></i>
              ) : null}
            </th>
            <th className="px-4 py-2 cursor-pointer border-0 text-center" onClick={() => handleSort('IDK')}>
                IDK
              </th>
              <th className="px-4 py-2 cursor-pointer border-0 text-center" onClick={() => handleSort('JoiningDate')}>
                Joining Date
              </th>
              <th className="px-4 py-2 cursor-pointer border-0 text-center" onClick={() => handleSort('Department')}>
                Department
              </th>
            </tr>
          </thead>
          <tbody className='divide-y devide-gray-200'>
            {filteredData.map((row) => (
              <tr key={row.id} className="bg-white hover:bg-gray-100">
                <td className="p-4 flex flex-row border-0 ">
                    <img
                    src={row.ProfilePicture}
                    alt={`Profile picture of ${row.Members}`}
                    className="h-12 w-12 mr-4 rounded-full "
                    />
                    {row.Members}
                </td>
                <td className="border-0 px-4 py-2 text-center">{row.IDK}</td>
                <td className="border-0 px-4 py-2 text-center">{row.JoiningDate}</td>
                <td className='place-content-center '>
                <div className={`border-0 inset-0 bg-red-500 rounded-full py-1 px-2 max-w-max text-white text-xs font-medium tracking-wide uppercase text-center `}>{row.Department}</div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
      </>
    );
  };
  
  export default Table;
 
