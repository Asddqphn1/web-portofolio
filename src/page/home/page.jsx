import Particles from "../../component/react-bits/Particles";
import Navbar from "../../component/page/home/Navbar";
import HeroSection from "../../component/page/home/HeroSection";
import AboutSection from "../../component/page/home/AboutSection";
import Achievement from "../../component/page/home/Achievement";
import HobySection from "../../component/page/home/HobySection";
import Contact from "../../component/page/home/Contact";
import Footer from "../../component/page/home/Footer";

function Home() {
  return (
    <>
      <div className="h-screen w-full bg-black">
        <Particles
          particleColors={["#037bfc", "#d922f5", "#f7d2c4"]}
          particleCount={130}
          particleSpread={8}
          speed={0.5}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Achievement/>
      <HobySection/>
      <Contact/>
      <Footer/>
    </>
  );
}
export default Home;
