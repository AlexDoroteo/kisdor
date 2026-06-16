import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Techs from "./sections/Techs/Techs";
import Features from "./sections/Features/Features";
import Showcase from "./sections/Showcase/Showcase";
import Footer from "./sections/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />
      <Hero />
      <Techs />
      <Features />
      <Experience />
      <Showcase />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
