import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEntry from "./components/AddEntry";

import Navbar from "./components/Navbar";
import EntryList from "./components/EntryList";
import UpdateEntry from "./components/UpdateEntry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EntryList />} />
          <Route path="/" element={<EntryList />} />
          <Route path="/entryList" element={<EntryList />} />
          <Route path="/addEntry" element={<AddEntry />} />
          <Route path="/editEntry/:id" element={<UpdateEntry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
