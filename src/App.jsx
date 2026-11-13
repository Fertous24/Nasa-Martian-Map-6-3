const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "video", label: "Demonstration Video" },
  { id: "features", label: "Features" },
  { id: "author", label: "Author" },
];

const features = [
  "Carte interactive de la surface de Mars",
  "Simulation d'un trajet Terre – Mars",
  "Données réelles des rovers de la NASA",
  "Mode exploration à 360°",
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
          <h1 className="stars">Mars</h1>
          <p>Voyagez jusqu'à la planète rouge, depuis votre navigateur.</p>
        </section>

        <section id="experience">
          <h2 className="stars">Experience</h2>
          <p>
            Posez le pied sur un sol rouillé, sous un ciel couleur de sable.
            Explorez les plaines, les canyons et les volcans de Mars comme si
            vous y étiez.
          </p>
        </section>

        <section id="video">
          <h2 className="stars">Demonstration Video</h2>
          <div className="video">
            {/* Remplacez ce bloc par votre vidéo :
            <iframe
              src="https://www.youtube.com/embed/VOTRE_ID"
              title="Vidéo de démonstration"
              allowFullScreen
            /> */}
            <span>Votre vidéo ici</span>
          </div>
        </section>

        <section id="features">
          <h2 className="stars">Features</h2>
          <ul>
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section id="author">
          <h2 className="stars">Author</h2>
          <p>
            Créé par [Votre nom], passionné d'espace et de exploration
            martienne.
          </p>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Mars</footer>
    </>
  );
}
