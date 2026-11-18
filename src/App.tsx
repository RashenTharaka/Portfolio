
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Highlights from "./components/Highlights";
import About from "./components/About";
import ParticleBackground from "./components/ParticleBackground";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      {/* One shared background for the entire website */}
      <div id="site-background" aria-hidden="true">
        <ParticleBackground />
      </div>

      {/* All website content stays above the background */}
      <div id="top" className="site-content">
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <Hero />
          {/* <Highlights /> */}
          <About />

          <Projects />
          <Skills />
          <Journey />
          <Contact />
          <Footer />

          {/* Add your Projects, Contact and Footer components here. */}
        </main>
      </div>
    </>
  );
}

export default App;
