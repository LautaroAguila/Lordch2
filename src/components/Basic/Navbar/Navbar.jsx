import React, { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const NavbarCustom = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      bg="light"
      expanded={expanded}
      className="py-3 shadow-sm mx-3 mt-3"
    >
      <Container fluid>
        {/* Izquierda: Logo o nombre */}
        <Navbar.Brand href="#" className="fw-bold ms-3">
          MiEmpresa
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        {/* Contenido del Navbar */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between align-items-center"
        >
          {/* Centro: Links */}
          <Nav className="mx-auto text-center rounded-pill bg-white shadow-sm px-4 py-2 my-2 my-lg-0">
            <Nav.Link href="#" className="mx-3 fw-semibold text-dark">
              Inicio
            </Nav.Link>
            <Nav.Link href="#servicios" className="mx-3 fw-semibold text-dark">
              Servicios
            </Nav.Link>
            <Nav.Link href="#aboutus" className="mx-3 fw-semibold text-dark">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-3 fw-semibold text-dark">
              Contacto
            </Nav.Link>
          </Nav>

          {/* Derecha: Imagen circular (Inicio de sesión) */}
          <div
            className={`d-flex ${
              expanded
                ? "justify-content-center align-items-center mt-3"
                : "justify-content-end me-3"
            }`}
          >
            <button
              className="border-0 bg-transparent p-0"
              onClick={() => alert("Iniciar sesión")}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="Perfil"
                roundedCircle
                width="40"
                height="40"
                style={{ objectFit: "cover" }}
              />
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
