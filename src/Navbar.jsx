import { Link } from "react-router-dom";

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "video", label: "Video Demonstration" },
  { id: "features", label: "Features" },
  { id: "author", label: "Authors" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" aria-label="Accueil">
        <img src="/logo.png" alt="Logo Mars" />
        <span className="logo-text">Team 5/3</span>
        <Link to="/exploration-simulation">Exploration</Link>
        </Link>

        <nav>
          {sections.map((s) => (
            <a key={s.id} href={`/#${s.id}`}>
              {s.label}
            </a>
          ))}
          
        </nav>
      </div>
    </header>
  );
}