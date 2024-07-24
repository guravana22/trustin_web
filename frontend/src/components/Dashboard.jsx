import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <Fragment>
      <div style={{ position: "relative" }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Dashboard;
