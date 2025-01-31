import React from "react";

function AcercaPagina() {
  return (
    <div className="contenedor-servicios">
      <div className="cards">
        <div className="color">
          <img
            src="/motor-electrico-servicio.png"
            className="imagen-servicio"
          />
        </div>
        <h1>Venta de accesorios</h1>
      </div>
      <div className="cards">
        <div className="color">
          <img src="/herramientas-servicio.png" className="imagen-servicio" />
        </div>
        <img src="/reparacion.jpg" className="color-cartas" />
      </div>
      <div className="cards">
        <div className="color">
          <img src="/ventaproducto-servicio.png" className="imagen-servicio" />
        </div>
        <img src="/ventaproductos.jpg" className="color-cartas" />
      </div>
    </div>
  );
}

export default AcercaPagina;
