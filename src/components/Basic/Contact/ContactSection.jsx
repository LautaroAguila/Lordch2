import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  EnvelopeFill,
  TelephoneFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Linkedin,
} from "react-bootstrap-icons";
import './ContactSection.css'

const ContactSection = () => {
  return (
    <section className="py-5 bg-light" id="contact">
      <Container>
        <Row className="mb-4 text-center">
          <h2 className="fw-bold mb-3">Contactanos</h2>
          <p className="text-muted">Estamos para ayudarte. ¡Conectemos!</p>
        </Row>

        <Row className="g-4 align-items-center">
          {/* Información de contacto */}
          <Col md={6} className="fade-in-left">
            <ul className="list-unstyled fs-5">
              <li className="mb-3">
                <EnvelopeFill className="text-primary me-2" />
                contacto@empresa.com
              </li>
              <li className="mb-3">
                <TelephoneFill className="text-primary me-2" />
                +54 11 1234-5678
              </li>
              <li className="mb-3">
                <GeoAltFill className="text-primary me-2" />
                Av. Siempre Viva 742, Buenos Aires, Argentina
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-dark social-icon">
                <Facebook size={28} />
              </a>
              <a href="#" className="text-dark social-icon">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-dark social-icon">
                <Linkedin size={28} />
              </a>
            </div>
          </Col>

          {/* Mapa */}
          <Col md={6} className="fade-in-right">
            <div className="map-container shadow-sm rounded overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9991089012487!2d-58.38155932478159!3d-34.603684457513504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac76d18e7c7%3A0x4d1aa6df4e8e4b90!2sObelisco!5e0!3m2!1ses!2sar!4v1696618900000!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
