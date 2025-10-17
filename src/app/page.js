import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SobreNosotros from "./components/SobreNosotros";
import NoticiasDestacadas from "./components/NoticiasDestacadas";
import HeroCarousel from "./components/HeroCarousel";
import HatchingCarousel from "./components/HatchingCarousel";

export default function Home () {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroCarousel />
      <HatchingCarousel />
      <SobreNosotros />
      <NoticiasDestacadas />
      <Footer />
    </div>
  );
}