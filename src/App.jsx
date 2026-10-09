import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <main className="contenedor-tarjetas">
        <Card 
          categoria="COMPETICIÓN"
          nombre="Calendario de partidos" 
          descripcion="Próximos encuentros destacados de LaLiga."
          informacion="• Barça vs. Getafe (Sáb 11:30 hs) | • Real Madrid vs. Villarreal (Sáb 14:00 hs) | • Alavés vs. Atleti (Sáb 09:15 hs)"
        />

        <Card 
          categoria="CLASIFICACIÓN"
          nombre="Tabla de posiciones" 
          descripcion="Top 4 de LaLiga (Zona Champions)."
          informacion="1º FC Barcelona (21 pts) | 2º Atlético de Madrid (16 pts) | 3º Real Betis (16 pts) | 4º Real Madrid (15 pts)"
        />

        <Card 
          categoria="RENDIMIENTO"
          nombre="Estadísticas" 
          descripcion="Números del líder del torneo."
          informacion="FC Barcelona: 7 victorias en 7 partidos | 31 goles a favor (+24 Dif.) | Promedio de 4.4 goles por juego."
        />

        <Card 
          categoria="DESTACADO"
          nombre="El MVP de la semana" 
          descripcion="Jugador en mejor forma de la liga."
          informacion="Raphinha (FC Barcelona) — Líder de goleo con 12 goles en 7 partidos disputados."
        />
      </main>
    </div>
  );
}

export default App;