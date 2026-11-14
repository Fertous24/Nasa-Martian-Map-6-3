import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function ExplorationSimulation() {
  return (
    <>
      <Navbar />

      <main>
        <section id="simulation">
          <h1 className="page-title">Exploration simulation</h1>
          <p>Bienvenue dans la simulation d'exploration de Mars.</p>

          <div className="simulation">
            <span>Votre simulation ici</span>
          </div>

          <Link to="/" className="btn btn-outline">
            ← Retour à l'accueil
          </Link>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Mars</footer>
    </>
  );
}