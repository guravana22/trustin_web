import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <Fragment>
      <div className="login_section">
        <div className="error-container">
          <h1 className="error-head">404</h1>
          <div className="error-divider"></div>
          <p className="error-message" style={{ margin: "0px" }}>
            The page you’re looking for doesn’t exist.
          </p>
        </div>
        <div className="mt-4">
          <NavLink to="/">
            <button
              type="button"
              className="login_button mx-auto"
              style={{ width: "unset" }}
            >
              Back to Homepage
            </button>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Pagenotfound;
