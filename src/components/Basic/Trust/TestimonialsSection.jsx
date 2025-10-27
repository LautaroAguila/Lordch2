import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María López",
      text: "Excelente atención y resultados. Superaron nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Carlos Méndez",
      text: "Muy profesionales, comprometidos y con gran calidad humana.",
      rating: 5,
    },
    {
      name: "Ana Torres",
      text: "Nos ayudaron a digitalizar todo nuestro proceso con resultados increíbles.",
      rating: 4,
    },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-4">Lo que dicen nuestros clientes</h2>
        <Row className="justify-content-center">
          {testimonials.map((t, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column justify-content-between text-center p-4">
                  <div>
                    <p className="fst-italic text-secondary mb-4">"{t.text}"</p>
                    <h5 className="fw-bold mb-2">{t.name}</h5>
                  </div>
                  <div>
                    {[...Array(t.rating)].map((_, i) => (
                      <StarFill key={i} color="#FFD700" className="me-1" />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
