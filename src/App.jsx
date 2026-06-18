import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import OurStory from './pages/OurStory.jsx';
import Experiences from './pages/Experiences.jsx';
import Gallery from './pages/Gallery.jsx';
import Events from './pages/Events.jsx';
import Shop from './pages/Shop.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-zulu-black overflow-x-hidden font-sans">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/27665845674"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center justify-center text-2xl"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

export default App;
