import React from "react";
import admlogo from "../assets/images/admlogo.svg";
import fsrlogo from "../assets/images/fsrlogo.svg";
import emiterslogo from "../assets/images/emiterslogo.svg";
import centralbanklogo from "../assets/images/centeralbanklogo.svg";
import OwlCarousel from "react-owl-carousel";

const options = {
  // stagePadding: 60,
  nav: false,
  margin: 40,
  loop: true,
  dots: false,
  touchDrag: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

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
        <div className="container-fluid">
          <h3>We are affiliated with</h3>
          <div className="row mt-5 justify-content-center justify-content-md-none">
            <div class="col col-lg-9 col-sm-12">
              <OwlCarousel className="owl-theme screenshot_slider" {...options}>
                {clientLogos.map((logo, index) => (
                  <div className="col" key={index}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="mb-3 m-auto client_img"
                    />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clients;
