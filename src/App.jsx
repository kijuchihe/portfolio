import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type={"services"} />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Parallax type={"portfolio"} />
      </section>
      <Portfolio />
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
