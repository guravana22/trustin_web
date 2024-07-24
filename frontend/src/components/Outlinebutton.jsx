import React from "react";

const OutlineButton = ({ name, icon }) => {
  return (
    <React.Fragment>
      <button className="outline_button">
        {icon && <img src={icon} alt="icon" className="button-icon" />}
        {name}
      </button>
    </React.Fragment>
  );
};

export default OutlineButton;
