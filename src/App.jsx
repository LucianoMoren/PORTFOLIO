import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
function App() {
  return (
    <div className="asd">
      <Navbar />
      <About />
      <Education />
      <Portfolio />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
}

export default App;
