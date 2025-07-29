import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


export default function Home () {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}