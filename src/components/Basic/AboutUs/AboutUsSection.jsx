import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './AboutUsSection.css'

const AboutUsSection = () => {
  return (
    <section className="py-5 bg-light" id="aboutus">
      <Container>
        <Row className="align-items-center">
          {/* Imagen */}
          <Col md={6} className="mb-4 mb-md-0 fade-in-left">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Nuestra historia"
              fluid
              rounded
              className="shadow-sm"
            />
          </Col>

          {/* Texto */}
          <Col md={6} className="fade-in-right">
            <h2 className="fw-bold mb-3">Nuestra Historia</h2>
            <p className="text-muted fs-5">
              Desde nuestros comienzos, nos propusimos un objetivo claro: crear soluciones innovadoras
              que mejoren la vida de las personas y potencien el crecimiento de las empresas.
            </p>
            <p className="text-muted">
              Con el paso de los años, hemos formado un equipo apasionado, comprometido con la
              excelencia y enfocado en brindar un servicio personalizado para cada cliente.
            </p>
            <p className="fw-semibold mt-3 text-success">
              Porque más que una empresa, somos un equipo que cree en el cambio positivo.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
