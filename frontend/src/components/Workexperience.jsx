import React from "react";
import OwlCarousel from "react-owl-carousel";
import img1 from "../assets/images/complianceimg.svg";
import img2 from "../assets/images/secureimg.svg";
import img3 from "../assets/images/digitalimg.svg";
import img4 from "../assets/images/fundimg.svg";
import { ReactComponent as AutomobileIcon } from "../assets/images/automobile.svg";
import { ReactComponent as RealestateIcon } from "../assets/images/realestateicon.svg";

const options = {
  stagePadding: 60,
  nav: false,
  margin: 40,
  loop: true,
  dots: false,
  touchDrag: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
};

const cardData = [
  {
    id: 1,
    title: "Step1",
    heading: "Compliance & Verification",
    description:
      "We ensure all parties are verified and meet highest level of regulatory and compliance standards",
    bottomImg: img1,
  },
  {
    id: 2,
    image: <RealestateIcon />,
    title: "Step2",
    heading: "Secure Escrow Account Setup",
    description:
      "We establish a separate protected account to securely hold and allocate funds, guaranteeing peace of mind throughout the transaction.",
    link: "#/",
    bottomImg: img2,
  },
  {
    id: 3,
    image: <RealestateIcon />,
    title: "Step3",
    heading: "Digital Agreement Generation",
    description:
      "We draft a comprehensive digital contract, outlining transaction terms to make sure of mutual understanding and agreement.",
    link: "#/",
    bottomImg: img3,
  },
  {
    id: 4,
    image: <AutomobileIcon />,
    title: "Step4",
    heading: "Fund Allocation & Delivery Confirmation",
    description:
      "We ensure transfer of funds securely and confirm the delivery of goods or services to enhance readiness and satisfaction for all parties.",
    bottomImg: img4,
  },
  {
    id: 5,
    image: <RealestateIcon />,
    title: "Step5",
    heading: "Fund Release Authorization & Transaction Assurance",
    description:
      "Upon satisfactory delivery, we release funds, guaranteeing a successful and secure transaction to provide condience and satisfaction.",
    bottomImg: img4,
  },
];

const Workexperience = () => {
  const renderCards = (data) => {
    return data.map((card) => (
      <div key={card.id} className="item">
        <div
          className="card Workexperience_cards border border-0"
          style={{ backgroundColor: card.bgcolor }}
        >
          <div>
            <div className="image-container separator">
              <img
                src={card.bottomImg}
                alt="background"
                className="background-image"
                style={{
                  zIndex: "99999",
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 Workexperience_card_data">
          <h6 className="title">{card.title}</h6>
          <h3 className="card_heading">{card.heading}</h3>
          <p className="small card_description">{card.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <React.Fragment>
      <div
        className="banner_section_footer"
        style={{ position: "relative", background: "unset" }}
      >
        <div className="container-fluid workexperience_cards">
          <div className="row">
            <div class="col-xl-6 col-lg-8 col-md-12">
              <h2 className="sub_heading" style={{ color: "#000714" }}>
                How We Work to Create Trusted Experiences?
              </h2>
              <p
                className="sub_heading_paragraph mb-5"
                style={{ color: "#5D636F" }}
              >
                We help our customers deliver and get winning experiences using
                the latest technology and the best digital escrow services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <OwlCarousel className="owl-theme screenshot_slider" {...options}>
                {renderCards(cardData)}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Workexperience;
