import React from "react";

const HomeBackground = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center text-white mt-3"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "85vh",
        position: "relative",
      }}
    >
      {/* Capa oscura superpuesta */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Texto */}
      <div style={{ zIndex: 2, maxWidth: "700px" }}>
        <h1 className="fw-bold display-4 mb-3">Transformamos ideas en realidad</h1>
        <p className="fs-5">
          Somos una empresa apasionada por la tecnología, la innovación y el crecimiento de nuestros clientes.
        </p>
        <a href="#aboutus">
            <button className="btn btn-light btn-lg mt-3 rounded-pill">
                Conocé más
            </button>
        </a>
      </div>
    </div>
  );
};

export default HomeBackground;
