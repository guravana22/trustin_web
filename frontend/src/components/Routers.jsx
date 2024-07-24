import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Pagenotfound from "./Pagenotfound";

const Routers = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routers;
