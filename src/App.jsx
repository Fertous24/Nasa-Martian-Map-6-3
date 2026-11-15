
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
              We know that each question takes at least 5 minutes to
              reach Earth, and the answer takes another 5 minutes
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

        <section id="experience">
          <h2>Solution</h2>

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
            an EVA after landing in Jezero Crater, near the
            Perseverance rover:
          </p>

          <a
            href="/index1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Open in full screen
          </a>

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

          <Link
            to="/exploration-simulation"
            className="btn"
          >
            Exploration Simulation
          </Link>
        </section>

        {/* VIDEO SECTION */}
        <section id="video">
          <h2>Demonstration Video</h2>
          <p>
            This is our demonstration video, showing how to use
            our app and exploring all of its features:
          </p>

          <div className="video">
            <span>Your video here</span>
          </div>
        </section>


        {/* AUTHOR SECTION */}
        <section id="author">
          <h2>Authors</h2>
        
          <p>
            Created by a team of passionate high school students
            during their free weekends.
          </p>
        
          <ul className="author-list">
            <li>
              <strong>Ilann Diallo Bogreau</strong> – Developed the map and the app using JavaScript.
            </li>
            <li>
              <strong>Kévin Nguyen Trong BUI</strong> – Designed the website and wrote all its content. Created and edited the demonstration video.
            </li>
            <li>
              <strong>Marco BLANC</strong> – 
            </li>
            <li>
              <strong>Joachim SERVANT</strong> – Created the 3D experience on mars with Unity.
            </li>
            <li>
              <strong>Gabriel GUIMBARD-VILLA</strong> – Wrote the team report.
            </li>
          </ul>
        </section>

      </main>
    </>
  );
}
