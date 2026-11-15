import { Link } from 'react-router-dom'; // Assuming react-router-dom for Link

export default function Navbar() {
  // Define sections for the map to work
  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'video', label: 'Demonstration video' },
    { id: 'documentation', label: 'Documentation' },
    { id: 'author', label: 'Authors' }
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" aria-label="Accueil">
          <img src="/logo.png" alt="Logo Mars" />
          <span className="logo-text">Team 5/3</span>
        </Link>
        
        {/* Removed the '=' and closed the previous tag properly */}
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
