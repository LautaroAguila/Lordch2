import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const BrandsSection = () => {
  const brands = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <Container>
        <h2 className="fw-bold mb-4">Marcas que confían en nosotros</h2>
        <Row className="justify-content-center align-items-center">
          {brands.map((brand, index) => (
            <Col key={index} xs={6} sm={4} md={2} className="my-3">
              <Image
                src={brand.logo}
                alt={brand.name}
                fluid
                style={{ maxHeight: "50px", objectFit: "contain" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BrandsSection;
