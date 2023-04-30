import React from "react";
import DatePick from "./Datepicker";

const AddEntry = () => {
  return (
    <div className="flex max-w-2xl m-auto shadow cursor-pointer border-b">
      <div className="p-8">
        <div className="font-thin text-2xl">
          <h1>Add New Company Entry</h1>
        </div>
        <div className="items-center justify-center h-full w-full my-4">
          <label className="block my-1 text-gray-600 text-sm font-normal">
            Company Name
          </label>
          <input type="text" className="rounded-md h-10" />
          <label className="block my-1 text-gray-600 text-sm font-normal">
            Notes
          </label>
          <input type="text" className="rounded-md h-10 w-full border-solid" />
          <DatePick />
          <br />
          <button className="rounded text-white font-semibold bg-green-400 mt-3 py-2 px-6 hover:bg-green-700 mr-4">
            Save
          </button>
          <button className="rounded text-white font-semibold bg-orange-400 mt-3 py-2 px-6 hover:bg-orange-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
