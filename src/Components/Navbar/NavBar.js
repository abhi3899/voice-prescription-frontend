import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { auth } from "../../config/fire";
import { Link } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => {
  return (
    <>
      <ReactBootStrap.Navbar className="navbar .sticky-nav" fixed="top">
        <Link to="/">
          <ReactBootStrap.Navbar.Brand href="#home" className="logo">
            Voice Prescription
          </ReactBootStrap.Navbar.Brand>
        </Link>
        <ReactBootStrap.Nav className="links">
          <ReactBootStrap.Nav.Link href="#home" className="link">
            Home
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#about" className="link">
            About
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#contact" className="link">
            Contact Us
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Form className="form">
          <Link to={"/login"}>
            <ReactBootStrap.Button variant="outline-info">
              Sign In
            </ReactBootStrap.Button>
          </Link>
        </ReactBootStrap.Form>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default NavBar;
