import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="me-auto" as={Link} to="/">
          Pantera Bebidas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-5 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/category/sinAlcohol">
              Sin alcohol
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Cervezas">
              Cervezas
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Aperitivos">
              Aperitivos
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Vodka">
              Vodka
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Energizantes">
              Energizantes
            </Nav.Link>
          </Nav>
          <Link to="/cart" className="me-auto">
            <CartWidget />
          </Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
