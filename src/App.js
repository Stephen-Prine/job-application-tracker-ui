import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEntry from "./components/AddEntry";

import Navbar from "./components/Navbar";
import EntryList from "./components/EntryList";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
