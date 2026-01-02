
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import CustomizedStrategies from './components/CustomizedStrategies';
import FeatureCards from './components/FeatureCards';
import Testimonials from './components/Testimonials';
import OurProcess from './components/OurProcess';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <CustomizedStrategies />
        <FeatureCards />
        <Testimonials />
        <OurProcess />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
