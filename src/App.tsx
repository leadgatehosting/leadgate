
import { Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-background">
        <ScrollToHash />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </ReactLenis>
  );
}

export default App;
