import { useState } from "react";

function Navbar() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const toggleRegistro = () => {
    setMostrarRegistro(!mostrarRegistro);
  };

  return (
    <header className="navbar-header-custom">
      {/* Menú de navegación arriba */}
      <nav className="navbar-top-links">
        <button className="nav-btn">Inicio</button>
        <button className="nav-btn">Noticias</button>
        <button className="nav-btn">Contáctanos</button>
        <button className="nav-btn btn-destacado" onClick={toggleRegistro}>
          {mostrarRegistro ? "Ocultar Registro" : "Registro de Usuario"}
        </button>
      </nav>

      {/* Título centrado, grande y estilizado */}
      <div className="navbar-brand-centered">
        <h1 className="brand-title">Goloso pelota</h1>
      </div>

      {/* Formulario desplegable */}
      {mostrarRegistro && (
        <div className="registro-form-container">
          <h3 className="registro-form-title">Registro de Usuario</h3>
          <form onSubmit={(e) => e.preventDefault()} className="registro-form">
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" placeholder="Tu nombre completo" required />
            </div>
            <div className="form-group">
              <label>Correo Electrónico:</label>
              <input type="email" placeholder="correo@ejemplo.com" required />
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            <button type="submit" className="btn-submit">
              Registrarse
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Navbar;