import React from "react";
import { useNavigate } from "react-router-dom";

const Entry = ({ entry, deleteEntry }) => {
  const navigate = useNavigate();
  const editEntry = (e, id) => {
    e.preventDefault();
    navigate(`/editEntry/${id}`);
  };

  return (
    <tr key={entry.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{entry.companyName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{entry.dateApplied}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{entry.notes}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editEntry(e, entry.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEntry(e, entry.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Entry;
