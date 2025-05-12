import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
import { InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavbarScroll() {
  return (
    <Navbar expand="lg" className="navbarcolor">
      <Container>

        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logo} height="64" alt="Logo" />
          <div className="ms-3">
            <b className="brandname mb-0">Bookoe</b>
            <div className="subtitle">
              <small>Book Store Website</small>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbarsize">

          <InputGroup className="navsize">
            <InputGroup.Text className="backgroundmenu">
              <FontAwesomeIcon icon={faList} className="iconsize" />
              <div className="px-3"> {/*espace entre menus et icon */}               
                <NavDropdown title="Menus" id="nav-dropdown-account">
                  <NavDropdown.Item href="#profile">Books</NavDropdown.Item>
                  <NavDropdown.Item href="#orders">Commandes</NavDropdown.Item>
                  <NavDropdown.Item href="#settings">
                    Paramètres
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#logout">
                    Se déconnecter
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </InputGroup.Text>

            <Form.Control
              placeholder="Search over 30 million book titles"
              aria-label="search"
              aria-describedby="basic-addon1"
            />

            <InputGroup.Text className="backgroundmenu">
              <FontAwesomeIcon
                icon={faMagnifyingGlassLocation}
                className="iconsize"
              /> 
            </InputGroup.Text>
          </InputGroup>
        </Navbar.Collapse>

        <div className="d-flex justify-content-end align-items-center">
          <Button className="mx-2 buttonlogin">Log In</Button>
          <div className="buttonsignup d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="usersize ms-3" />
            <Button className="buttoncolor mx-2">
              <b>Sign up</b>
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;
