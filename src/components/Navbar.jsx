function Navbar() {

    function mostrarMensaje(nombre) {
        alert("Hiciste clic en " + nombre);
    }

    return (
        <nav>
            <h2>Mi Aplicación</h2>

            <ul>
                <li>
                    <button onClick={() => mostrarMensaje("Inicio")}>
                        Inicio
                    </button>
                </li>

                <li>
                    <button onClick={() => mostrarMensaje("Nosotros")}>
                        Nosotros
                    </button>
                </li>

                <li>
                    <button onClick={() => mostrarMensaje("Contacto")}>
                        Contacto
                    </button>
                </li>

                <li>
                    <button onClick={() => mostrarMensaje("Bplay")}>
                        Patrocina betplay 
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;