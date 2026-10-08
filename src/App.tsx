import Navbar from "./components/Navbar.jsx";

import Hero from "./components/Hero";

import Card from "./components/Card";

import Footer from "./components/Footer";

function App() {

  return (

    <div>

      <Navbar />

      <Hero />

      <section>

        <Card
          nombre="Diseño web"
          descripcion="Diseño moderno y atractivo para tu sitio web"
          informacion="Este diseño web se encarga de hacer que las páginas se vean más exóticas, llamativas y surumbélicas, buscando que tengan una apariencia agradable para los usuarios."
          boton="Ver más"
        />

        <Card
          nombre="Desarrollo web"
          descripcion="Desarrollo de aplicaciones web modernas y eficientes"
          informacion="Este apartado de desarrollo web consiste en crear sitios y aplicaciones que funcionen correctamente, sean fáciles de utilizar y permitan ofrecer diferentes servicios a través de internet."
          boton="Ver más"
        />

        <Card
          nombre="Marketing digital"
          descripcion="Estrategias efectivas para promocionar tu negocio en línea"
          informacion="El marketing digital permite promocionar productos y servicios utilizando internet y diferentes medios digitales."
          boton="Ver más"
        />

      </section>

      <Footer />

    </div>
  );
}

export default App;