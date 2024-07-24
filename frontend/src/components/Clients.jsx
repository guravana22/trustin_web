import React from "react";
import admlogo from "../assets/images/admlogo.svg";
import fsrlogo from "../assets/images/fsrlogo.svg";
import emiterslogo from "../assets/images/emiterslogo.svg";
import centralbanklogo from "../assets/images/centeralbanklogo.svg";

const clientLogos = [
  { src: admlogo, alt: "ADM Logo" },
  { src: fsrlogo, alt: "FSR Logo" },
  { src: emiterslogo, alt: "Emiters Logo" },
  { src: centralbanklogo, alt: "Central Bank Logo" },
];

const Clients = () => {
  return (
    <React.Fragment>
      <div className="client_section text-center">
        <div className="container">
          <h3>We are affiliated with</h3>
          <div className="row mt-5 ms-4 me-4 flex-wrap">
            {clientLogos.map((logo, index) => (
              <div className="col" key={index}>
                <img src={logo.src} alt={logo.alt} className="mb-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clients;
