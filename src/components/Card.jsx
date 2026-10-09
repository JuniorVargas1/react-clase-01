import { useState } from "react";

function Card({ categoria, nombre, descripcion, informacion }) {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  return (
    <div className="tarjeta">
      <div className="badge-categoria">{categoria}</div>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>

      <button 
        className="btn-ver-mas" 
        onClick={() => setMostrarDetalle(!mostrarDetalle)}
      >
        {mostrarDetalle ? "Ver menos" : "Ver más"}
      </button>

      {mostrarDetalle && (
        <div className="detalle-info">
          <p>{informacion}</p>
        </div>
      )}
    </div>
  );
}

export default Card;