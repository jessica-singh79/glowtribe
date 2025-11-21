import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
     <TopBar />
      <Navigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
