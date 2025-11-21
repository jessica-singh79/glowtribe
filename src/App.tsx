import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
     <TopBar />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
