import React, { useImperativeHandle, useState } from "react";
import { useNavigate } from "react-router-dom";
import EntryService from "../services/EntryService";

const EntryList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EntryService.getEntries();
        setEntry(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold mb-10"
          onClick={() => navigate("/addEntry")}
        >
          Add Application Entry
        </button>
      </div>
      <div className="flex shadow border-b-2">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Company Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Date Applied
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Notes
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              <tr>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Google</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">2023-4-30</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    DID not feel good about this one Need to work on data
                    structures
                  </div>
                </td>
                <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 px-4"
                  >
                    Edit
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EntryList;
