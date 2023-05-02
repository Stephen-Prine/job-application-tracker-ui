import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EntryService from "../services/EntryService";
import Entry from "./Entry";

const EntryList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EntryService.getEntries();
        setEntries(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEntry = (e, id) => {
    e.preventDefault();
    EntryService.deleteEntry(id).then((res) => {
      if (entries) {
        setEntries((prevElement) => {
          return prevElement.filter((entries) => entries.id !== id);
        });
      }
    });
  };

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
              {entries.map((entry) => (
                <Entry
                  entry={entry}
                  key={entry.id}
                  deleteEntry={deleteEntry}
                ></Entry>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EntryList;
