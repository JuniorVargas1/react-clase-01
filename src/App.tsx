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
          boton="Ver más"
        />

        <Card
          nombre="Desarrollo web"
          descripcion="Desarrollo de aplicaciones web modernas y eficientes"
          boton="Ver más"
        />

        <Card
          nombre="Marketing digital"
          descripcion="Estrategias efectivas para promocionar tu negocio en línea"
          boton="Ver más"
        />

      </section>

      <Footer />

    </div>

  );
}

export default App;