import { useState } from "react";

function Card({ nombre, descripcion, informacion, boton }) {

    const [mostrarInformacion, setMostrarInformacion] = useState(false);

    function mostrarMensaje() {
        setMostrarInformacion(!mostrarInformacion);
    }

    return (
        <article>
            <h2>{nombre}</h2>

            <p>{descripcion}</p>

            <button onClick={mostrarMensaje}>
                {boton}
            </button>

            {mostrarInformacion && (
                <p>{informacion}</p>
            )}
        </article>
    );
}

export default Card;