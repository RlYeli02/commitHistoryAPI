import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommitList from "./pages/Commits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<CommitList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
