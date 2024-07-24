import React from "react";

const Primarybutton = (props) => {
  return (
    <React.Fragment>
      <button type="button" className="login_button">
        {props.name}
      </button>
    </React.Fragment>
  );
};

export default Primarybutton;
