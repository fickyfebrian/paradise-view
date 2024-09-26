import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/footer';
import Klaim from './pages/Klaim';
import Portfolio from './pages/Portfolio';
import Paket from './pages/Paket';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/paket" element={<Paket/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/klaim" element={<Klaim/>} />
        <Route path="/about" element={<About/>} />
        
      </Routes>
      <Footer  />
    </Router>
  );
}

export default App
