function App() {
  return (
    <main className="page">
      <nav className="nav" aria-label="Navigation principale">
        <a className="brand" href="/">MARS<span> / MAP</span></a>
        <span className="status"><i /> MISSION EN COURS</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">GUIDE DE SURVIE INTERPLANÉTAIRE</p>
        <h1>Votre prochaine<br /><span>frontière.</span></h1>
        <p className="intro">
          Explorez Mars et préparez-vous à y poser le pied. La planète rouge
          n’attend que vous.
        </p>
        <a className="button" href="#explorer">Explorer la carte <span aria-hidden="true">↗</span></a>
        <div className="planet" aria-hidden="true"><div className="planet-shadow" /></div>
        <div className="coordinates" id="explorer">18° 26′ N&nbsp;&nbsp; 77° 31′ E<br />JEZERO CRATER</div>
      </section>

      <footer>UN PETIT PAS POUR VOUS. UN GRAND PAS POUR L’HUMANITÉ.</footer>
    </main>
  );
}

export default App;
