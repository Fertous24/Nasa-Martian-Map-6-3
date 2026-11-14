import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Indispensable pour que la carte ne s'affiche pas cassée

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "video", label: "Video Demonstration" },
  { id: "features", label: "Features" },
  { id: "author", label: "Authors" },
];

const features = [
  "An interactive map of the surface of Mars",
  "Simulation of Ilann and Jojo failing (impossible)",
  "The localisation of the Earth in the Mars sky.",
  "Exploration at 360°",
];

export default function App() {
  // 1. On crée une référence pour cibler la div de la carte
  const mapRef = useRef(null);

  // 2. On initialise Leaflet une seule fois quand la page charge
  useEffect(() => {
    // Sécurité pour éviter de créer la carte deux fois en mode dev React
    if (mapRef.current && !mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current).setView([0, 0], 2);

      // Fond de carte de base (tu le remplaceras par tes tuiles de Mars plus tard)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
      }).addTo(map);
    }
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

          {/* 3. L'EMPLACEMENT DE TA CARTE (la hauteur est obligatoire !) */}
          <div
            ref={mapRef}
            style={{ height: "400px", width: "100%", marginTop: "20px", borderRadius: "12px" }}
          ></div>
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
            Créé par les GOAT, passionné d'espace et d'exploration (et pour l'argent)
            martienne.
          </p>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Mars</footer>
    </>
  );
}
