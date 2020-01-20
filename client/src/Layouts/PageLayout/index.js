import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const Layout = props => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Bids">Bids</Nav.Link>
            <Nav.Link href="/topten">Top Ten Buyers</Nav.Link>
            <Nav.Link href="/buyers">Buyers</Nav.Link>
            <Nav.Link href="/competitions">Competitions</Nav.Link>
            <Nav.Link href="/sellers">Sellers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </>
  );
};
export default Layout;
