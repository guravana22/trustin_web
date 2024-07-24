import React from "react";
import img from "../../src/assets/images/banner.svg";

const Bannerbg = () => {
  return (
    <React.Fragment>
      <div className="contianer-fluid p-3">
        <img src={img} alt="no_img" style={{ width: "100%" }} />
      </div>
    </React.Fragment>
  );
};

export default Bannerbg;
