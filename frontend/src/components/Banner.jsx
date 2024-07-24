import React from "react";
import bannerleftbg from "../assets/images/bannerleftbg.svg";
import arrow from "../assets/images/bannerightarrow.svg";
import Outlinebutton from "./Outlinebutton";
import dropdown_toggle from "../assets/images/down.svg";
import textbg from "../assets/images/textbg.svg";
import icon from "../assets/images/demoicon.svg";
import Primarybutton from "./Primarybutton";

const Banner = () => {
  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <div
          className="banner_section banner_left_content banner-section"
          id="bannerSection"
          style={{ position: "relative" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div class="container text-center">
                <div class="row">
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <div
                      style={{
                        border: "1px solid #F5F5F5",
                        borderRadius: "16px",
                      }}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <div className="border-container">
                        <div class="basic-chip outline d-flex justify-content-center align-items-center">
                          <div class="pulsating-dot active"></div>
                          <span> New Feature</span>
                        </div>
                      </div>
                      <div className="border-container pe-2">
                        <div className="checkout_heading">
                          {/* <div> */}
                          Check out the dashboard{" "}
                          <img src={arrow} alt="no_img" />
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="text-center"
                id="heroText"
                style={{ position: "relative" }}
              >
                <h1 className="main_heading">
                  Maximize Security At Every Stage Of The
                </h1>
                <div style={{ position: "relative" }}>
                  <h1 className="main_heading" style={{ color: "#FF6600" }}>
                    Transactions With TrustIn
                  </h1>
                  <img src={textbg} alt="no_img" className="textbg" />
                </div>

                <p className="description mt-4">
                  As UAE & Middle East's First Regulated Trust as a Service
                  Digital Escrow Platform, we promise to help enterprises across
                  industries transact at speed digitally with full security,
                  transparency, and reliability.
                </p>
                <div className="d-flex justify-content-center align-items-center g-3 mt-5 flex-column flex-md-row">
                  {/* <button type="button" className="login_button">
                      Get Started
                    </button> */}
                  <Primarybutton name="Get Started" />
                  <Outlinebutton name="1 min Demo" icon={icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={bannerleftbg} alt="no_img" className="bannerleft_bg" />
      </div>
    </React.Fragment>
  );
};

export default Banner;
