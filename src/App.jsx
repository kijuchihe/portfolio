import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Section from "./components/section/Section";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <Section>
        <Navbar />
        <Hero />
      </Section>
      <Section>
        <Parallax type={"services"} />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section>
        <Parallax type={"portfolio"} />
      </Section>
      <Portfolio />
      <Section>
        <Contact />
      </Section>
    </div>
  );
};

export default App;
