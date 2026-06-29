import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import SeeSection from "./components/SeeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SeeSection />
      <MainSection />
    </main>
  );
}
