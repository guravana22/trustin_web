import React from "react";
import adm from "../assets/images/adgmbg.svg";
import lock from "../assets/images/lock.svg";
import trustin from "../assets/images/trusinbglogo.svg";
import feedback from "../assets/images/feedbackbg.svg";
import checkbg from "../assets/images/checkbg.svg";
import dataasset from "../assets/images/dataassetbg.svg";
import emiters from "../assets/images/emitersbg.svg";
import banking from "../assets/images/bankingbg.svg";

const cardsData = [
  {
    className: "card_one",
    images: [
      { src: trustin, alt: "no_img", className: "float-start tophoverimg" },
      { src: lock, alt: "no_img", className: "float-end" },
    ],
  },
  {
    className: "card_two",
    images: [
      { src: adm, alt: "no_img", className: "float-end righthoverimg" },
      { src: feedback, alt: "no_img", className: "float-start" },
    ],
  },
  {
    className: "card_three",
    images: [
      { src: checkbg, alt: "no_img", className: "float-start bottomhoverimg" },
      { src: dataasset, alt: "no_img", className: "float-end" },
    ],
  },
  {
    className: "card_four",
    images: [
      { src: emiters, alt: "no_img", className: "float-end lefthoverimg" },
      { src: banking, alt: "no_img", className: "float-start" },
    ],
  },
];

const HoverableCards = () => {
  return (
    <React.Fragment>
      <div id="container-fluid">
        <div className="text-content d-flex flex-column justify-content-center align-items-center">
          <h3 className="sub_heading hovercard_heading w-20">
            Secured, Regulated, Trustworthy, Bank Integrated
          </h3>
          <p className="w-75">
            We, at TrustIn Trade, stand as your dependable ally in digital
            escrow services, placing utmost importance on safeguarding your
            financial security and providing you with peace of mind.
          </p>
          <button
            type="button"
            className="login_button"
            style={{ height: "50px" }}
          >
            Start Your Journey
          </button>
        </div>

        {cardsData.map((card, index) => (
          <div key={index} className={card.className}>
            {card.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image.src}
                alt={image.alt}
                className={image.className}
              />
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default HoverableCards;
