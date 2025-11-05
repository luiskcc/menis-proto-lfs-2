import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Proyectos from "./components/Proyectos";
import Lab from "./components/Lab";
import NoticiasDestacadas from "./components/NoticiasDestacadas";
import HeroCarousel from "./components/HeroCarousel";
import HatchingCarousel from "./components/HatchingCarousel";

export default function Home () {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroCarousel />
      <HatchingCarousel />
      <Proyectos />
      <Lab />
      <NoticiasDestacadas />
      <Footer />
    </div>
  );
}