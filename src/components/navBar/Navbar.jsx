import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

import { useState } from "react";
import Home from "../home/hero/Home";
import Branding from "../branding/Branding";
import Testimonials from "../testimonials/Testimonials";
import ContactSection from "../contactsection/ContactSection";
import CompaniesSection from "../companies/CompaniesSection";
import CustomeSection from "../custome/CustomeSection";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav_container">
          <h1 className="nav_logo">Digital Agency</h1>
          <ul className={click ? "nav_menu_active" : "nav_menu"}>
            <li className="nav_items">
              <Link exact to="home" className="nav_links ">
                Home
              </Link>
            </li>
            <li className="nav_items">
              <Link exact to="about" className="nav_links">
                About
              </Link>
            </li>
            <li className="nav_items">
              <Link exact to="testimonials" className="nav_links">
                Testimonials
              </Link>
            </li>
            <li className="nav_items">
              <Link exact to="contact" className="nav_links">
                Contact
              </Link> 
            </li>
          </ul>

          <div className="nav_icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

        </div>
      </nav>
      <section id="home">{<Home />}</section>
      <section>{<CompaniesSection />}</section>
      <section id="about">{<Branding />}</section>
      <section>{<CustomeSection />}</section>
      <section id="testimonials">{<Testimonials />}</section>
      <section id="contact">{<ContactSection />}</section>
    </>
  );
};

export default Navbar;
