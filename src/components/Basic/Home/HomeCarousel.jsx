import React from "react";
import { Carousel } from "react-bootstrap";
import './HomeCarousel.css'

const HomeCarousel = () => {
  return (
    <div className="mt-4">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Primera imagen"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-shadow">Innovamos para tu futuro</h2>
            <p>Soluciones tecnológicas que impulsan tu crecimiento.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
            alt="Segunda imagen"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-shadow">Pasión por la excelencia</h2>
            <p>Nos destacamos por la calidad y la innovación constante.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Tercera imagen"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-shadow">Trabajamos junto a vos</h2>
            <p>Creemos en las relaciones duraderas con nuestros clientes.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
