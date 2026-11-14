import { Link } from "react-router-dom";

export default function ExplorationSimulation() {
  return (
    <>
      <header className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/exploration-simulation">Exploration simulation</Link>
        </nav>
      </header>

      <main>
        <section id="simulation">
          <h1 className="page-title">Exploration simulation</h1>
          <p>
            Bienvenue dans la simulation d'exploration de Mars.
          </p>

          {/* Emplacement de ta simulation */}
          <div className="simulation">
            <span>Votre simulation ici</span>
          </div>

          <Link to="/" className="btn btn-outline">
            ← Retour à l'accueil
          </Link>
        </section>
      </main>
    </>
  );
}
