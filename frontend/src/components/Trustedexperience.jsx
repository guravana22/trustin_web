import React, { useState, useRef } from "react";
import img1 from "../assets/images/instantimg.svg";
import img2 from "../assets/images/automatedimg.svg";
import img3 from "../assets/images/verificationimg.svg";
import img4 from "../assets/images/regulatedimg.svg";
import img5 from "../assets/images/automatedimg.svg";
import img6 from "../assets/images/easytrackingimg.svg";
import costeff from "../assets/images/costeff.svg";
import Increase from "../assets/images/increase.svg";
import enhanced from "../assets/images/enhanced.svg";
import transctionbg from "../assets/images/transctionbg.svg";
import quickrelease from "../assets/images/quick.svg";
import Tabs from "./Tabs";
const tabsData = [
  {
    id: "pills-buyer",
    label: "For Buyer",
    cards: [
      {
        id: 1,

        title: "Instant Access to Escrow Account",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img1,
        bgcolor: "rgba(255, 220, 201, 0.4)",
      },
      {
        id: 2,

        title: "Protection Against Fraud",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: img2,
        bgcolor: "rgba(232, 223, 255, 0.4)",
      },
      {
        id: 3,

        title: "Verification of Goods/Services",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: img3,
        bgcolor: "rgba(255, 239, 197, 0.4)",
      },
      {
        id: 4,

        title: "Regulated and Compliant",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img4,
        bgcolor: "rgba(174, 255, 222, 0.4)",
      },
      {
        id: 5,

        title: "Automated Processes",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img5,
        bgcolor: "rgba(188, 223, 231, 0.4)",
      },
      {
        id: 6,

        title: "Easy Tracking",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: img6,
        bgcolor: "rgba(251, 209, 221, 0.4)",
      },
    ],
  },
  {
    id: "pills-seller",
    label: "For Sellers",
    cards: [
      {
        id: 1,

        title: "Instant Access to Escrow Account",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img1,
        bgcolor: "rgba(255, 220, 201, 0.4)",
      },
      {
        id: 2,

        title: "Assured Payment",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: img2,
        bgcolor: "rgba(232, 223, 255, 0.4)",
      },
      {
        id: 3,

        title: "Fraud Protection",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: img6,
        bgcolor: "rgba(255, 239, 197, 0.4)",
      },
      {
        id: 4,

        title: "Automated Workflows",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img5,
        bgcolor: "rgba(174, 255, 222, 0.4)",
      },
      {
        id: 5,

        title: "Simplified Documentation",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img3,
        bgcolor: "rgba(188, 223, 231, 0.4)",
      },
      {
        id: 6,

        title: "Quick Release of Funds",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: quickrelease,
        bgcolor: "rgba(251, 209, 221, 0.4)",
      },
    ],
  },
  {
    id: "pills-broker",
    label: "For Broker",
    cards: [
      {
        id: 1,

        title: "Instant Access to Escrow Account",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img1,
        bgcolor: "rgba(255, 220, 201, 0.4)",
      },
      {
        id: 2,

        title: "Protection Against Fraud",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: img2,
        bgcolor: "rgba(232, 223, 255, 0.4)",
      },
      {
        id: 3,

        title: "Verification of Goods/Services",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: img3,
        bgcolor: "rgba(255, 239, 197, 0.4)",
      },
      {
        id: 4,

        title: "Regulated and Compliant",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img4,
        bgcolor: "rgba(174, 255, 222, 0.4)",
      },
      {
        id: 5,

        title: "Automated Processes",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img5,
        bgcolor: "rgba(188, 223, 231, 0.4)",
      },
      {
        id: 6,

        title: "Easy Tracking",
        description:
          "Reliable escrow solutions for real estate deals, protecting all parties involved in property transactions.",
        link: "#/",
        bottomImg: img6,
        bgcolor: "rgba(251, 209, 221, 0.4)",
      },
    ],
  },
  {
    id: "pills-enterprise",
    label: "For Enterprise",
    cards: [
      {
        id: 1,

        title: "Enhanced Top Line",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: enhanced,
        bgcolor: "rgba(255, 220, 201, 0.4)",
      },
      {
        id: 2,

        title: "Increased Credibility and Trust",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: Increase,
        bgcolor: "rgba(232, 223, 255, 0.4)",
      },
      {
        id: 3,

        title: "Streamlined Operations",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        link: "#/",
        bottomImg: img2,
        bgcolor: "rgba(174, 255, 222, 0.4)",
      },
      {
        id: 4,

        title: "Improved Cash Flow",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: costeff,
        bgcolor: "rgba(255, 220, 201, 0.4)",
      },
      {
        id: 5,

        title: "Simplified Documentation",
        description:
          "Lorem ipsum dolor sit amet consectetur. Netus est enim aliquet tortor purus risus morbi.",
        bottomImg: img3,
        bgcolor: "rgba(188, 223, 231, 0.4)",
      },
      {
        id: 6,

        title: "Cost Efficiency",
        description:
          "Reliable escrow solutions for real estate deals, protecting all parties involved in property transactions.",
        link: "#/",
        bottomImg: costeff,
        bgcolor: "rgba(251, 209, 221, 0.4)",
      },
    ],
  },
];

const Trustedexperience = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const tabsContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - tabsContainerRef.current.offsetLeft);
    setScrollLeft(tabsContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 20;
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = (direction) => {
    const scrollAmount = 2;
    tabsContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const renderTabs = () => {
    return tabsData.map((tab) => (
      <li className="nav-item" role="presentation" key={tab.id}>
        <button
          className={`nav-link ${tab.id === "pills-buyer" ? "active" : ""}`}
          id={`${tab.id}-tab`}
          data-bs-toggle="pill"
          data-bs-target={`#${tab.id}`}
          type="button"
          role="tab"
          aria-controls={tab.id}
          aria-selected={tab.id === "pills-buyer"}
        >
          {tab.label}
        </button>
      </li>
    ));
  };

  const renderCards = (cards) => {
    return cards.map((card) => (
      <div key={card.id} className="col-lg-4 col-md-6 p-3">
        <div className="card border border-0">
          <div
            className="card-body trustedexperience_cards"
            style={{
              backgroundColor: card.bgcolor,
              padding: "30px 0px 20px 20px",
            }}
          >
            <div className="image-container separator">
              <img
                src={card.bottomImg}
                alt="background"
                className="background-image"
                style={{ zIndex: "99999" }}
              />
            </div>
            <div className="card-content">
              {/* {card.link && (
                <NavLink to={card.link}>
                  <RightArrowIcon />
                </NavLink>
              )} */}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="card_heading">{card.title}</h3>
            <p className="small card_descripition">{card.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  const renderTabContent = () => {
    return tabsData.map((tab) => (
      <div
        key={tab.id}
        className={`tab-pane fade ${
          tab.id === "pills-buyer" ? "show active" : ""
        }`}
        id={tab.id}
        role="tabpanel"
        aria-labelledby={`${tab.id}-tab`}
        tabIndex="0"
      >
        <div className="container-fluid text-start">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {renderCards(tab.cards)}
          </div>
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
        <div className="container">
          <div className="row">
            <div class="col-xl-6 col-lg-8 col-md-12">
              <h2 className="sub_heading" style={{ color: "#000714" }}>
                Trusted Transactions, Shaped By Your Story
              </h2>
              <p
                className="sub_heading_paragraph mb-5"
                style={{ color: "#5D636F" }}
              >
                As the first-ever digital Escrow Platform service provider, we
                provide tailored solutions for every chapter of your buying and
                selling journey.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                className="tabs-scroll-container"
                ref={tabsContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                <ul
                  className="nav nav-pills mb-3 flex-row  nav-justified transaction_tabs tabs_section"
                  id="pills-tab"
                  role="tablist"
                >
                  {renderTabs()}
                </ul>
              </div>

              <div className="tab-content" id="pills-tabContent">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
        <img src={transctionbg} alt="no_img" className="transctionbg" />
      </div>
    </React.Fragment>
  );
};

export default Trustedexperience;
