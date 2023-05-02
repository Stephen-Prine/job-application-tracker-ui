import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EntryService from "../services/EntryService";

const UpdateEntry = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [entry, setEntry] = useState({
    id: id,
    companyName: "",
    notes: "",
    dateApplied: "",
    link: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEntry({ ...entry, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EntryService.getEntryById(id);
        setEntry(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const UpdateEntry = (e) => {
    e.preventDefault();
    EntryService.updateEntry(entry, id)
      .then((response) => {
        navigate("/entryList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex max-w-2xl m-auto shadow cursor-pointer border-b">
      <div className="p-8">
        <div className="font-thin text-2xl">
          <h1>Update Company Entry</h1>
        </div>
        <div className="items-center justify-center h-full w-full my-4">
          <label className="block my-1 text-gray-600 text-sm font-normal">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={entry.companyName}
            onChange={(e) => handleChange(e)}
            className="rounded-md h-10"
          />

          <label className="block my-1 text-gray-600 text-sm font-normal">
            Notes
          </label>
          <input
            type="text"
            name="notes"
            value={entry.notes}
            onChange={(e) => handleChange(e)}
            className="rounded-md h-10 w-full border-solid"
          />
          {/* <DatePick
        name="dateApplied"
        value={entry.dateApplied}
        onChange={(e) => handleChange(e)}
      /> */}
          <label className="block mt-4 text-gray-600 text-sm font-normal">
            Date Applied
          </label>
          <input
            type="date"
            name="dateApplied"
            value={entry.dateApplied}
            className="mt-4"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button
            onClick={UpdateEntry}
            className="rounded text-white font-semibold bg-green-400 mt-3 py-2 px-6 hover:bg-green-700 mr-4"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/entryList")}
            className="rounded text-white font-semibold bg-orange-400 mt-3 py-2 px-6 hover:bg-orange-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEntry;
