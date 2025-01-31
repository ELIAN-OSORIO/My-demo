import React from "react";

function ProductosPagina() {
  return (
    <div>
      <div>
        <div className="prueba">
          <div className="contenedor-cartas">
            <img src="./motor4.png" className="imagen-motor" />
            <h1>Motor Monofasico</h1>
            <p>$ 8,700</p>
            <button className="boton-vista">Ver</button>
          </div>
          <div className="contenedor-cartas">
            <img src="./motor2.png" className="imagen-motor" />
            <h1>Motor Trifasico</h1>
            <p>$ 6,800</p>
            <button className="boton-vista">Ver</button>
          </div>
          <div className="contenedor-cartas">
            <img src="./motor3.png" className="imagen-motor" />
            <h1>Motor Trifasico</h1>
            <p>$ 6,000</p>
            <button className="boton-vista">Ver</button>
          </div>
        </div>
        <div className="prueba">
          <div className="contenedor-cartas">
            <img src="./motor5.png" className="imagen-reductor" />
            <h1>Motoreductor Trifasico</h1>
            <p>$ 4,800</p>
            <button className="boton-vista">Ver</button>
          </div>
          <div className="contenedor-cartas">
            <img src="./motor6.png" className="imagen-reductor" />
            <h1>Motoreductores</h1>
            <p>$ 4,900</p>
            <button className="boton-vista">Ver</button>
          </div>
          <div className="contenedor-cartas">
            <img src="./motor7.png" className="imagen-reductor" />
            <h1>Motoreductores Trifasicos</h1>
            <p>$ 4,900</p>
            <button className="boton-vista">Ver</button>
          </div>
        </div>
        <div className="prueba">
          <div className="contenedor-cartas">
            <img src="./motor8.png" className="imagen-otros" />
            <h1>Bomba Centrifuga</h1>
            <p>$ 6,800</p>
            <button className="boton-vista">Ver</button>
          </div>
          <div className="contenedor-cartas">
            <img src="./motor9.png" className="imagen-otros" />
            <h1>Motoreductor</h1>
            <p>$ 5,500</p>
            <button className="boton-vista">Ver</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductosPagina;
