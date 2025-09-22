import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Investigacion from "./components/Investigacion";
import SobreNosotros from "./components/SobreNosotros";
import NoticiasDestacadas from "./components/NoticiasDestacadas";
import HeroCarousel from "./components/HeroCarousel";
import ObrasCarousel from "./components/ObrasCarousel";

export default function Home () {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroCarousel />
      <ObrasCarousel />
      <Investigacion />
      <SobreNosotros />
      <NoticiasDestacadas />
      <Footer />
    </div>
  );
}