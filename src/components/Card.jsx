function Card({ nombre, descripcion, boton }) {

    function mostrarMensaje() {
        alert("Bienvenido a " + nombre);
    }

    return (
        <article>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <button onClick={mostrarMensaje}>
                {boton}
            </button>
        </article>
    );
}

export default Card;