import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import cardbottomImg from "../assets/images/cardbottomimg.svg";
import realestateImg from "../assets/images/realestatimg.svg";
import brokerescrowImg from "../assets/images/brokerimg.svg";
import goodsImg from "../assets/images/goodesandserviceimg.svg";
import anglesImg from "../assets/images/angleimg.svg";
import mergersImg from "../assets/images/mergesimg.svg";
import vcfundingImg from "../assets/images/vcfundingimg.svg";
import capbilitiesbg from "../assets/images/capbilitiesbg.svg";
import { ReactComponent as AutomobileIcon } from "../assets/images/automobile.svg";
import { ReactComponent as RightArrowIcon } from "../assets/images/rightarrow.svg";
import { ReactComponent as RealestateIcon } from "../assets/images/realestateicon.svg";
import { ReactComponent as BrokerescrowIcon } from "../assets/images/brokericon.svg";
import { ReactComponent as GoodsIcon } from "../assets/images/goodesandserviceicon.svg";
import { ReactComponent as AngleIcon } from "../assets/images/angleicon.svg";
import { ReactComponent as MergersIcon } from "../assets/images/mergesicon.svg";
import { ReactComponent as VcfundingIcon } from "../assets/images/vufundingicon.svg";
import { ReactComponent as EscrowIcon } from "../assets/images/escrowimg.svg";
import { ReactComponent as ApiIcon } from "../assets/images/aptinegrationimg.svg";
import { ReactComponent as CheckoutIcon } from "../assets/images/checkoutimg.svg";
import { ReactComponent as TargetIcon } from "../assets/images/targetimg.svg";
import { ReactComponent as RealestatetwotIcon } from "../assets/images/realestatestwoimg.svg";
import { ReactComponent as GoodsBagIcon } from "../assets/images/goodsbagimg.svg";
// import { ReactComponent as RightArrowIcon } from "../assets/images/rightarrow.svg";

const tabsData = [
  {
    id: "b2b-usecases",
    label: "B2B Use Cases",
    cards: [
      {
        id: 1,
        image: <AutomobileIcon />,
        image2: <RightArrowIcon />,
        title: "Automobile Escrow",
        description:
          "Secure escrow services for automobile transactions to ensure trust and transparency between buyers and sellers.",
        link: "#/",
        bottomImg: cardbottomImg,
        gridColors: {
          topLeft: "#FFDCC9",
          topRight: "#FFDCC9",
          bottomLeft: "#FFDCC9",
          bottomRight: "#FFDCC9",
        },
      },
      {
        id: 2,
        image: <RealestateIcon />,
        image2: <RightArrowIcon />,
        title: "Real Estate Escrow",
        description:
          "Reliable escrow solutions for real estate deals, protecting all parties involved in property transactions.",
        link: "#/",
        bottomImg: realestateImg,
        gridColors: {
          topLeft: "#E8DFFF",
          topRight: "#E8DFFF",
          bottomLeft: "#E8DFFF",
          bottomRight: "#E8DFFF",
        },
      },
      {
        id: 3,
        image: <BrokerescrowIcon />,
        image2: <RightArrowIcon />,
        title: "Broker Escrow",
        description:
          "Provide secure escrow services for brokers by ensuring commission payments are protected and transactions are smooth.",
        link: "#/",
        bottomImg: brokerescrowImg,
        gridColors: {
          topLeft: "#FFEFC5",
          topRight: "#FFEFC5",
          bottomLeft: "#FFEFC5",
          bottomRight: "#FFEFC5",
        },
      },
      {
        id: 4,
        image: <GoodsIcon />,
        image2: <RightArrowIcon />,
        title: "Goods & Services",
        description:
          "Safeguard payments in goods and services contracts, ensuring delivery and satisfaction for both parties.",
        link: "#/",
        bottomImg: goodsImg,
        gridColors: {
          topLeft: "#AEFFDE",
          topRight: "#AEFFDE",
          bottomLeft: "#AEFFDE",
          bottomRight: "#AEFFDE",
        },
      },
      {
        id: 5,
        image: <AngleIcon />,
        image2: <RightArrowIcon />,
        title: "Angle Investment",
        description:
          "Trusted escrow services for angel investors, securing investments and providing proper fund allocation.",
        link: "#/",
        bottomImg: anglesImg,
        gridColors: {
          topLeft: "#BCDFE7",
          topRight: "#BCDFE7",
          bottomLeft: "#BCDFE7",
          bottomRight: "#BCDFE7",
        },
      },
      {
        id: 6,
        image: <MergersIcon />,
        image2: <RightArrowIcon />,
        title: "Mergers & Acquisitions",
        description:
          "Facilitate secure escrow services for M&A transactions to make sure of smooth and transparent business transitions.",
        link: "#/",
        bottomImg: mergersImg,
        gridColors: {
          topLeft: "#FBD1DD",
          topRight: "#FBD1DD",
          bottomLeft: "#FBD1DD",
          bottomRight: "#FBD1DD",
        },
      },
      {
        id: 7,
        image: <VcfundingIcon />,
        image2: <RightArrowIcon />,
        title: "VC Funding",
        description:
          "Secure escrow services for venture capital funding, protecting investments, and guaranteeing proper use of funds.",
        link: "#/",
        bottomImg: vcfundingImg,
        gridColors: {
          topLeft: "#E8DFFF",
          topRight: "#E8DFFF",
          bottomLeft: "#E8DFFF",
          bottomRight: "#E8DFFF",
        },
      },
    ],
  },
  {
    id: "c2c-usecases",
    label: "C2C Use Cases",
    cards: [
      {
        id: 1,
        image: <EscrowIcon />,
        image2: <RightArrowIcon />,
        title: "Automobile Escrow",
        description:
          "Securely buy and sell cars with verified listings and trusted transactions.",
        link: "#/",
        bottomImg: cardbottomImg,
        gridColors: {
          topLeft: "#FFDCC9",
          topRight: "#FFDCC9",
          bottomLeft: "#FFDCC9",
          bottomRight: "#FFDCC9",
        },
      },
      {
        id: 2,
        image: <RealestateIcon />,
        image2: <RightArrowIcon />,
        title: "Real Estate Escrow",
        description:
          "Find your dream home or sell your property with confidence and transparency.",
        link: "#/",
        bottomImg: realestateImg,
        gridColors: {
          topLeft: "#E8DFFF",
          topRight: "#E8DFFF",
          bottomLeft: "#E8DFFF",
          bottomRight: "#E8DFFF",
        },
      },
      {
        id: 3,
        image: <GoodsIcon />,
        image2: <RightArrowIcon />,
        title: "Goods & Services",
        description:
          "Trade goods and services safely and efficiently with trusted peer-to-peer transactions.",
        link: "#/",
        bottomImg: goodsImg,
        gridColors: {
          topLeft: "#FFEFC5",
          topRight: "#FFEFC5",
          bottomLeft: "#FFEFC5",
          bottomRight: "#FFEFC5",
        },
      },
    ],
  },
  {
    id: "enterprises",
    label: "Enterprises/B2C Use Cases",
    cards: [
      {
        id: 1,
        image: <TargetIcon />,
        image2: <RightArrowIcon />,
        title: "E Commerce",
        description:
          "Secure online transactions with comprehensive fraud prevention and seamless user experience.",
        link: "#/",
        bottomImg: cardbottomImg,
        gridColors: {
          topLeft: "#FFDCC9",
          topRight: "#FFDCC9",
          bottomLeft: "#FFDCC9",
          bottomRight: "#FFDCC9",
        },
      },
      {
        id: 2,
        image: <RealestatetwotIcon />,
        image2: <RightArrowIcon />,
        title: "Real Estate",
        description:
          "Streamlined property transactions with robust security and verification processes.",
        link: "#/",
        bottomImg: realestateImg,
        gridColors: {
          topLeft: "#E8DFFF",
          topRight: "#E8DFFF",
          bottomLeft: "#E8DFFF",
          bottomRight: "#E8DFFF",
        },
      },
      {
        id: 3,
        image: <GoodsBagIcon />,
        image2: <RightArrowIcon />,
        title: "Goods & Services",
        description:
          "Enhanced trade assurance for reliable procurement and delivery of products and services.",
        link: "#/",
        bottomImg: goodsImg,
        gridColors: {
          topLeft: "#FFEFC5",
          topRight: "#FFEFC5",
          bottomLeft: "#FFEFC5",
          bottomRight: "#FFEFC5",
        },
      },
      {
        id: 4,
        image: <ApiIcon />,
        image2: <RightArrowIcon />,
        title: "API Integrations",
        description:
          "Easily integrate secure payment solutions into existing systems for enhanced functionality.",
        link: "#/",
        bottomImg: goodsImg,
        gridColors: {
          topLeft: "#AEFFDE",
          topRight: "#AEFFDE",
          bottomLeft: "#AEFFDE",
          bottomRight: "#AEFFDE",
        },
      },
      {
        id: 5,
        image: <CheckoutIcon />,
        image2: <RightArrowIcon />,
        title: "Checkout Solutions",
        description:
          "Simplify checkout processes with secure, efficient, and user-friendly payment gateways.",
        link: "#/",
        bottomImg: goodsImg,
        gridColors: {
          topLeft: "#BCDFE7",
          topRight: "#BCDFE7",
          bottomLeft: "#BCDFE7",
          bottomRight: "#BCDFE7",
        },
      },
    ],
  },
];

const Ourcapabilities = () => {
  const [showAll, setShowAll] = useState({});

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowAll = (tabId) => {
    setShowAll((prev) => ({ ...prev, [tabId]: true }));
  };

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
    const walk = (x - startX) * 10;
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = (direction) => {
    const scrollAmount = 2;
    tabsContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const renderCards = (cards, showAll) => {
    const cardsToShow = showAll || !isMobile ? cards : cards.slice(0, 2);
    return cardsToShow.map((card) => (
      <div key={card.id} className="col-lg-6 col-xl-4 col-md-6 pe-2">
        <div className="card h-100 card1 m-0">
          <div className="card-body" style={{ position: "relative" }}>
            <div className="background-grid">
              <div
                className="grid-item top-left"
                style={{ backgroundColor: card.gridColors.topLeft }}
              ></div>
              <div
                className="grid-item top-right"
                style={{ backgroundColor: card.gridColors.topRight }}
              ></div>
              <div
                className="grid-item bottom-left"
                style={{ backgroundColor: card.gridColors.bottomLeft }}
              ></div>
              <div
                className="grid-item bottom-right"
                style={{ backgroundColor: card.gridColors.bottomRight }}
              ></div>
              <div
                className="grid-item bottom-left"
                style={{ backgroundColor: card.gridColors.bottomLeft }}
              ></div>
            </div>
            {card.image}
            <h3>{card.title}</h3>
            <p className="small">{card.description}</p>
            <NavLink to={card.link}>
              <p
                className="small learnmore_paragraph"
                style={{ display: "inline-block" }}
              >
                Learn More
                {card.image2}
              </p>
            </NavLink>
            <div className="col-sm-6 card_bottom_img">
              <img src={card.bottomImg} alt="no_img" className="card_img" />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <React.Fragment>
      <div className="ourcapabilities_section" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12">
              <h2 className="sub_heading">
                Our Capabilities For Bringing Change
              </h2>
              <p className="sub_heading_paragraph mb-5">
                We offer a best-in-class platform with state-of-the-art
                encryption and stringent security protocols to ensure each
                transaction is secure and seamless with unparalleled digitalized
                speed
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
                  className="nav nav-pills mb-3 flex-row nav-justified tabs_section capabilitiestabs"
                  id="pills-tab"
                  role="tablist"
                >
                  {tabsData.map((tab, index) => (
                    <li className="nav-item" role="presentation" key={tab.id}>
                      <button
                        className={`nav-link ${index === 0 ? "active" : ""}`}
                        id={`${tab.id}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#${tab.id}`}
                        type="button"
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={index === 0 ? "true" : "false"}
                      >
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tab-content" id="pills-tabContent">
                {tabsData.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${
                      index === 0 ? "show active" : ""
                    }`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-tab`}
                    tabIndex="0"
                  >
                    <div className="container-fluid text-start">
                      <div className="row row-cols-1 row-cols-md-3 g-4">
                        {renderCards(tab.cards, showAll[tab.id])}
                      </div>
                    </div>
                    {!showAll[tab.id] && isMobile && (
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="seeall_button mt-5 w-100"
                          onClick={() => handleShowAll(tab.id)}
                        >
                          See All
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img src={capbilitiesbg} alt="no_img" className="capbilitiesbg" />
      </div>
    </React.Fragment>
  );
};

export default Ourcapabilities;
