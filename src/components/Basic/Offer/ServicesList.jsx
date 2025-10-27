import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";
import './ServicesList.css'

const ServicesList = () => {
  const services = [
    {
      title: "Desarrollo Web",
      desc: "Creamos sitios modernos, optimizados y adaptables a todas las plataformas.",
    },
    {
      title: "Consultoría Tecnológica",
      desc: "Te ayudamos a implementar las mejores soluciones para tu empresa.",
    },
    {
      title: "Mantenimiento y soporte",
      desc: "Nos encargamos de que tu infraestructura funcione sin interrupciones.",
    },
  ];

  return (
    <section className="py-5 bg-white" id="servicios">
      <Container>
        <h2 className="fw-bold text-center mb-5">Nuestros Servicios</h2>
        <Row className="gy-4">
          {services.map((s, index) => (
            <Col
              key={index}
              md={4}
              className="text-center px-4 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-3">
                <CheckCircle color="#198754" size={40} />
              </div>
              <h5 className="fw-bold">{s.title}</h5>
              <p className="text-muted">{s.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesList;
