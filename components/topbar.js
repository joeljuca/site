import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Topbar = ({ menu }) => {
  return (
    <Navbar expand="sm" className="Topbar">
      <Navbar.Brand href="/">
        <small className="fw-bolder">JJ</small>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="topbar" />

      <Navbar.Collapse id="topbar" className="mr-auto ml-auto">
        <Nav className="ms-auto text-end">
          {menu.map(([title, props], index) => (
            <Nav.Link key={title} className="rounded" {...props}>
              {title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
