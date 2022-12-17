import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CrudApp from "./component/CrudApp";
import AllUser from "./component/AllUser";
import AddUser from "./component/AddUser";
import Navbar from "./component/Navbar";
import EditUser from "./component/EditUser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CrudApp />} />
          <Route path="all" element={<AllUser />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
