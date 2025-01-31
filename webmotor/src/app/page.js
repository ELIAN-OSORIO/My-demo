import Servicios from "@/pages/Servicios/page";
import "../styles/styles.css";
import MarcasMotores from "@/pages/Marcas/page";
export default function Home() {
  return (
    <div>
      <div className="contenedor-principal">
        <img src="./motores.png" className="imagen" />
      </div>
      <Servicios />
      <MarcasMotores />
    </div>
  );
}
