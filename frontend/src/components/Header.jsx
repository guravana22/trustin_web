import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo.svg";
import { NavLink, useLocation, LInk, Link } from "react-router-dom";
import Ourcapabilities from "./Ourcapabilities";
import Bannerbg from "./Bannerbg";
import Trustedexperience from "./Trustedexperience";
import Clients from "../components/Clients";
import Readytransct from "../components/Readytransct";
import Milestoneexperiences from "../components/Milestoneexperiences";
import Workexperience from "../components/Workexperience";
import Hoverbalecards from "../components/Hoverbalecards";
import toggle from "../assets/images/toggle.svg";
import Primarybutton from "./Primarybutton";
import Banner from "./Banner";
const Header = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const nav = document.querySelector("nav");

    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 5);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDropdownActive = [
      "/comapanyone",
      "/comapanytwo",
      "/comapanythree",
      "/comapanyfour",
    ].includes(location.pathname);

    setActiveDropdown(isDropdownActive);
  }, [location.pathname]);

  const homeSectionClass = location.pathname === "/" ? "home-section" : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Fragment>
      <div>
        <div className={homeSectionClass}>
          <nav className="navbar navbar-light navbar-expand-xl bg-faded justify-content-center bg-whites fixed-top nav-active align-items-center">
            <div className="container navbar-page">
              <button
                className="navbar-toggler d-block d-md-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsingNavbar3"
              >
                <img src={toggle} alt="no_img" />
              </button>
              <NavLink to="/" className="navbar-brand d-flex w-50 me-auto pt-2">
                <img src={logo} alt="log not display" className="logo" />
              </NavLink>

              <button
                className="navbar-toggler d-none d-md-block d-xl-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsingNavbar3"
              >
                <img src={toggle} alt="no_img" />
              </button>
              <li className="nav-item d-block d-md-none">
                <button
                  type="button"
                  className="login_button"
                  style={{ width: "unset" }}
                >
                  Get Started
                </button>
              </li>

              <div
                className="navbar-collapse collapse w-100 header_menu"
                id="collapsingNavbar3"
              >
                <ul className="navbar-nav w-100 justify-content-center">
                  {/* <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      to="/"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/platform"
                      activeClassName="disabled"
                      disabled
                    >
                      Platform
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      activeDropdown ? "show" : ""
                    }`}
                  >
                    <a
                      className={`nav-link dropdown-toggle d-flex justify-content-strt align-items-center gap-0 ${
                        activeDropdown ? "show" : ""
                      }`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded={activeDropdown ? "true" : "false"}
                    >
                      Use Cases
                    </a>
                    <ul
                      className={`dropdown-menu ${
                        activeDropdown ? "show" : ""
                      }`}
                    >
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/usecase-one"
                          activeClassName="active"
                        >
                          UsecaseOne
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/usecase-two"
                          activeClassName="active"
                        >
                          UsecaseTwo
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/usecase-three"
                          activeClassName="active"
                        >
                          UsecaseThree
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/usecas-four"
                          activeClassName="active"
                        >
                          UsecaseFour
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      activeDropdown ? "show" : ""
                    }`}
                  >
                    <Link
                      className={`nav-link dropdown-toggle d-flex justify-content-strt align-items-center gap-0 ${
                        activeDropdown ? "show" : ""
                      }`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded={activeDropdown ? "true" : "false"}
                    >
                      Company
                    </Link>
                    <ul
                      className={`dropdown-menu ${
                        activeDropdown ? "show" : ""
                      }`}
                    >
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/companyone"
                          activeClassName="active"
                        >
                          CompanyOne
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/comapny-two"
                          activeClassName="active"
                        >
                          CompanyTwo
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/company-three"
                          activeClassName="active"
                        >
                          CompanyThree
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/company-four"
                          activeClassName="active"
                        >
                          CompanyFour
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto w-100 d-flex align-items-start justify-content-end align-items-xl-center">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/login"
                      activeClassName="active"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item p-0 d-none d-xl-block">
                    <button
                      type="button"
                      className="login_button"
                      style={{ width: "unset" }}
                    >
                      Get Started
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Banner />
        </div>
        <Bannerbg />
        <Trustedexperience />
        <Hoverbalecards />
        <Ourcapabilities />
        <Workexperience />
        <Milestoneexperiences />
        <Clients />
        <Readytransct />
      </div>
    </Fragment>
  );
};

export default Header;
