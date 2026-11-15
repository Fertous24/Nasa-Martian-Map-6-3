
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const features = [
  "An interactive map of the surface of Mars",
  "Simulation of Ilann and Jojo failing (impossible)",
  "The localisation of the Earth in the Mars sky.",
  "Exploration at 360°",
];

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-text">
            <h1>Mars</h1>
            <p>
              Voyagez jusqu'à la planète rouge, depuis votre navigateur.
            </p>
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

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <h2>Experience</h2>

          <p>
            Posez le pied sur un sol rouillé, sous un ciel couleur de sable.
            Explorez les plaines, les canyons et les volcans de Mars comme si
            vous y étiez.
          </p>

          <div className="eva-wrapper">
            <iframe
              src="/eva/index.html"
              title="Jezero EVA Navigator"
              className="eva-frame"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <p className="map-text">
            Simulation d'une sortie extravéhiculaire dans le cratère Jezero :
            itinéraire A*, oxygène, énergie, radiation et sécurité de retour.
          </p>

          <a
            href="/eva/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Ouvrir en plein écran
          </a>

          {" "}

          <Link
            to="/exploration-simulation"
            className="btn"
          >
            Exploration simulation
          </Link>
        </section>

        {/* VIDEO SECTION */}
        <section id="video">
          <h2>Demonstration Video</h2>

          <div className="video">
            <span>Votre vidéo ici</span>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features">
          <h2>Features</h2>

          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* AUTHOR SECTION */}
        <section id="author">
          <h2>Author</h2>

          <p>
            Créé par les GOAT, passionnés d'espace et d'exploration
            (et pour l'argent) martienne.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
