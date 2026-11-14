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
        </Link>

        <nav>
          {sections.map((s) => (
            <a key={s.id} href={`/#${s.id}`}>
              {s.label}
            </a>
          ))}
          <Link to="/exploration-simulation">Exploration</Link>
        </nav>
      </div>
    </header>
  );
}