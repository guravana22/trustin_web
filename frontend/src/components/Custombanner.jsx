import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Custombanner = (props) => {
  return (
    <Fragment>
      <div className="about_section" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="text-center text-white" id="heroText">
              <h1>{props.heading}</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-center">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">{props.subheading}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.description}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Custombanner;
