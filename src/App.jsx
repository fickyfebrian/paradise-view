import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/footer';
import Rooms from './pages/Rooms';
import Paket from './pages/Paket';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer  />
    </Router>
  );
}

export default App
