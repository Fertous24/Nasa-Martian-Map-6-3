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
            camera-controls
            disable-zoom
            camera-orbit="auto auto 1.8m"
            shadow-intensity="1"
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
