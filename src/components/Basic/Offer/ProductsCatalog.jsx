import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './ProductsCatalog.css'

const ProductsCatalog = () => {
  const products = [
    {
      name: "Producto 1",
      description: "Una breve descripción de este producto destacado.",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Producto 2",
      description: "Calidad superior y el mejor rendimiento del mercado.",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Producto 3",
      description: "Diseñado para quienes buscan innovación.",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="py-5 bg-light" id="servicios">
      <Container>
        <h2 className="fw-bold text-center mb-5">Nuestros Productos</h2>
        <Row className="g-4 justify-content-center">
          {products.map((p, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card className="product-card border-0 shadow-sm h-100 text-center p-3">
                <div className="overflow-hidden rounded-4">
                  <Card.Img
                    variant="top"
                    src={p.image}
                    className="img-fluid product-img"
                    alt={p.name}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold mt-3">{p.name}</Card.Title>
                  <Card.Text>{p.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductsCatalog;
