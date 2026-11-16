
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-text">
            <h1>Let's visit Mars !</h1>
            <p>
              This is our submission for the Nasa Challenge : "Interplanetary Survival Guide: Martian Map". 
            </p>
            <p>              
              Let's explore our solution to a safety and efficiency
              problem. If an astronaut lands on Mars and needs to
              travel on foot, how can they safely reach a destination
              without having to communicate with Earth at every step?
              We know that each question takes at least 7 minutes to
              reach Earth, and the answer takes another 7 minutes
              to arrive. It would be too long.
            </p>
          </div>

          <model-viewer
            src="/mars.glb"
            alt="3D model of Mars"
            auto-rotate
            rotation-per-second="15deg"
            interaction-prompt="none"
            exposure="1.1"
            class="planet-3d"
          ></model-viewer>
        </section>

        {/* VIDEO SECTION */}
        <section id="video">
          <h2>Demonstration Video</h2>
          <p>
            This is our demonstration video, an overview of the project.
          </p>

          <div className="video">
            <video 
              src="/videos/prese.mp4" 
              controls 
              width="100%"
            >
              if it doesn't work : https://youtu.be/_7F4tzGqkKE
            </video>
          </div>
        </section>

        <section id="experience">
        <h2>Try our 3D experience on Mars.</h2>
      
        <p>
          Our proposed solution is to allow astronauts to choose
          the safest route themselves. We envision a lightweight
          tablet that they can carry with them at all times.
          During an EVA (Extravehicular Activity), they can take
          it out and check how long it would take to reach a
          destination, whether they have enough oxygen to make
          the return journey safely, and access many other useful
          features that can transform an exploration mission.
          These features are demonstrated in our video.
        </p>
        <p className="map-text">
          A simulation of an astronaut's tablet interface during
          an EVA after landing in Jezero Crater, or in the Gale crater :
        </p>
      
        <div className="btn-group">
          <a
            href="/index1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Open in full screen
          </a>
      
          <a
            href="/tuto.pdf"
            download="tuto-carte-interactive.pdf"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Download the interactive map guide (PDF)
          </a>
        </div>
      
        <div className="eva-wrapper">
          <iframe
            src="/index1.html"
            title="Jezero EVA Navigator"
            className="eva-frame"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      
        {" "}

        <h2>Try our 3D experience on Mars.</h2>
      

        <Link
          to="https://joavant.github.io/Mars_Simulation/"
          className="btn"
        >
          Exploration Simulation
        </Link>
         <p>
            N.B : Please click on the "mission" button in the top left to start the experience. You can only click once, refresh the page to visit another site.
         </p>
      </section>


        
        <section id="documentation">
          <h2>Documentation</h2>

          <p>
            Download our documentation to explore our project, its architecture, the models used, and its sources.
          </p>

          <div className="doc-card">
            <div className="doc-icon" aria-hidden="true">📄</div>
            <div className="doc-info">
              <strong>Martian Map – Team 5/3 documentation</strong>
              <span>Format PDF</span>
            </div>
            <a
              href="/documentation1.pdf"
              download="Martian-map-5/3-documentation.pdf"
              className="btn"
            >
              Télécharger le PDF
            </a>
          </div>
            
          <div className="doc-card">
            <div className="doc-icon" aria-hidden="true">📄</div>
            <div className="doc-info">
              <strong>Used data</strong>
              <span>Format PDF</span>
            </div>
            <a
              href="/documentation2.pdf"
              download="used-data-5/3-Mars.pdf"
              className="btn"
            >
              Télécharger le PDF
            </a>
          </div>
      </section>


        {/* AUTHOR SECTION */}
        <section id="author">
          <h2>Authors</h2>
        
          <p>
            We are five high school students from Lycée Thiers in Marseille (hence the team name, 5/3) who are passionate about astronomy and space exploration. That is why we decided to participate in this project.
          </p>
        
          <ul className="author-list">
            <li>
              <strong>Ilann</strong> – Developed the map and the app using JavaScript.
            </li>
            <li>
              <strong>Kévin</strong> – Designed the website and wrote all its content. Integrated and connected everyone's work.
            </li>
            <li>
              <strong>Marco</strong> – Created the graphic design of the website ( Icon and the flag, with SI )
            </li>
            <li>
              <strong>Joachim</strong> – Created the 3D experience on mars with Unity.
            </li>
            <li>
              <strong>Gabriel</strong> – Wrote the team report, all the documentation and created the presentation video.
            </li>
          </ul>
        </section>

      </main>
    </>
  );
}
