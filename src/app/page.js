import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Proyectos from "./components/Proyectos";
import Proyectos2 from "./components/Proyectos2";
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
      <Proyectos2 />
      <NoticiasDestacadas />
      <Footer />
    </div>
  );
}