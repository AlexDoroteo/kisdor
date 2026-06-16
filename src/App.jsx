import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import TrustedBy from "./sections/TrustedBy/TrustedBy";
import Features from "./sections/Features/Features";
import Showcase from "./sections/Showcase/Showcase";
import WhyUs from "./sections/WhyUs/WhyUs";
import Stats from "./sections/Stats/Stats";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTA from "./sections/CTA/CTA";
import Footer from "./sections/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import CaseStudies from "./sections/CaseStudies/CaseStudies";
import TechStack from "./sections/TechStack/TechStack";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Experience />
      <Showcase />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
