import react, { useState } from "react";

function DatePick() {
  const [date, setDate] = useState();
  console.log("Date", date);
  return (
    <>
      <h1 className="mt-2">Date Applied: {date}</h1>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </>
  );
}
export default DatePick;
