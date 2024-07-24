import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/facebook.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import twitterIcon from "../assets/images/twitter.svg";

const footerSections = [
  {
    title: "Browse",
    links: [
      { text: "Home", path: "/#" },
      { text: "Platform", path: "/#" },
      { text: "Privacy Policy", path: "/#" },
      { text: "Terms & Conditions", path: "/#" },
      { text: "ESCROW Terms", path: "/#" },
    ],
  },
  {
    title: "Solution",
    links: [
      { text: "Enterprises", path: "/#" },
      { text: "B2B", path: "/#" },
      { text: "B2C", path: "/#" },
      { text: "C2C", path: "/#" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", path: "/#" },
      { text: "Contact", path: "/#" },
      { text: "Help Center", path: "/#" },
      { text: "FAQ", path: "/#" },
      { text: "Blog", path: "/#" },
    ],
  },
];

const socialMediaIcons = [
  { className: "facebook", icon: facebookIcon, path: "/" },
  { className: "instagram", icon: linkedinIcon, path: "/#" },
  { className: "NavLinkedin", icon: twitterIcon, path: "/#" },
];

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer_section" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <img src={logo} alt="no_img" className="logo" />
              <p className="banner_section_paragraph footer_paragraph mt-4 p-0">
                Any resemblance of the synthetic models to any real person is
                not intentional. Click here to report any concerns regarding
                synthetic models to our grievance officer.
              </p>
              <p>Stay connected with us on</p>
              <div className="nav justify-content-center d-flex gap-3">
                <div className="social_links">
                  <div className="social-icons-btn mb-3">
                    {socialMediaIcons.map((icon, index) => (
                      <NavLink
                        key={index}
                        className={`icons ${icon.className}`}
                        to={icon.path}
                      >
                        <img
                          src={icon.icon}
                          alt={icon.className}
                          style={{ height: "20px", width: "20px" }}
                        />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {footerSections.map((section, index) => (
              <div key={index} className="col-md-6 col-lg-2 col-sm-6 mb-4">
                <ul className="footer_links m-0">
                  <li>
                    <h3>{section.title}</h3>
                  </li>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer_center_logo mt-5 text-center">
              <div className="copy_right_section">
                <h2 className="copyright_heading mt-3 mb-3">
                  © 2024 Trustin Trade. All Rights Reserved.
                </h2>
              </div>
            </div>
            <hr className="pt-2 m-0 pb-2" />
            <div className="pt-2">
              <p className="copyright_paragraph">
                This document (“General Terms and Conditions” or “Terms”) is an
                agreement between you (“you”, “your” orCompany Limited by
                Shares, registered with Abu Dhabi Global Market, under
                Commercial License no. 000008461, having its registered address
                at Office 512, Level 11, Al Sarab Tower, Abu Dhabi Global Market
                Square, Al Maryah Island, Abu Dhabi, United Arab Emirates
                (“Company”). The Company is regulated by the Financial Services
                Regulatory Authority (FSRA) of ADGM under Financial Services
                Permission Number 240003 and authorized to provide Money
                Services Business (including escrow services). These Terms set
                out the terms and conditions governing your use and access of:
              </p>
              <p className="copyright_paragraph">
                “Business Conduct Rules” means the Conduct of Business Rulebook
                (COBS) set out by the FSRA available at Conduct of Business
                Rules (COBS) | Rulebook (thomsonreuters.com).
              </p>
              <p className="copyright_paragraph">
                “Buyer” means, with respect to a Person or Legal Person being a
                Registered User who seeks to purchase products and/or services
                from another Registered User and remit monies through the escrow
                Service offered by the Company on the Platform.
              </p>
              <p className="copyright_paragraph">
                “IPR” means all intellectual property or other proprietary
                rights worldwide, registered or to be registered, including
                patent, trademark, service mark, copyright, trade secret,
                know-how, moral right, all materials related to the Platform
                (“Platform Materials”) and any other intellectual and intangible
                property rights including all continuations whether in full or
                in part, applications, renewals, and extensions of any of the
                foregoing of the Company or any of its Affiliates, whether
                registered or unregistered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
