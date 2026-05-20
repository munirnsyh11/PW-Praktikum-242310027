import Navbar from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import { AboutSection } from "./components/About";
import { MenuSection } from "./components/Menu";
import { TestimonialSection } from "./components/Testimonial";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <MenuSection />

      <TestimonialSection />

      <Footer />
    </>
  );
}

export default App;