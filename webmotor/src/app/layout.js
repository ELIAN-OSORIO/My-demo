import Link from "next/link";
import "../styles/styles.css";
export default function RootLayout({ children }) {
  return (
    <body>
      <header>
        <div className="header">
          <nav className="navbar">
            <Link href={"/"}>Inicio</Link>
            <Link href={"/acerca"}>Servicios</Link>
            <Link href={"/productos"}>Productos</Link>
          </nav>
        </div>
      </header>
      {children}
    </body>
  );
}
