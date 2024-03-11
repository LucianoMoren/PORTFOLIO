import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
