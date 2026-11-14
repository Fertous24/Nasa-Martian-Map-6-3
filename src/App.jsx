import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "./Navbar.jsx";

const features = [
  "An interactive map of the surface of Mars",
  "Simulation of Ilann and Jojo failing (impossible)",
  "The localisation of the Earth in the Mars sky.",
  "Exploration at 360°",
];

export default function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
    }).addTo(map);

    // Nettoyage : indispensable quand on change de page puis qu'on revient
    return () => map.remove();
  }, []);

  return (
    <>
      <header className="navbar">
        <nav>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <h1>Mars</h1>
            <p>Voyagez jusqu'à la planète rouge, depuis votre navigateur.</p>
          </div>

          <model-viewer
            src="/mars.glb"
            alt="Modèle 3D de la planète Mars"
            auto-rotate
            rotation-per-second="15deg"
            interaction-prompt="none"
            exposure="1.1"
            class="planet-3d"
          ></model-viewer>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <p>
            Posez le pied sur un sol rouillé, sous un ciel couleur de sable.
            Explorez les plaines, les canyons et les volcans de Mars comme si
            vous y étiez.
          </p>

          <div ref={mapRef} className="map"></div>

          <p className="map-text">[PARAGRAPHE A INSERER]</p>

          <Link to="/exploration-simulation" className="btn">
            Exploration simulation
          </Link>
        </section>

        <section id="video">
          <h2>Demonstration Video</h2>
          <div className="video">
            <span>Votre vidéo ici</span>
          </div>
        </section>

        <section id="features">
          <h2>Features</h2>
          <ul className="feature-list">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section id="author">
          <h2>Author</h2>
          <p>
            Créé par les GOAT, passionné d'espace et d'exploration (et pour
            l'argent) martienne.
          </p>
        </section>
      </main>
    </>
  );
}
