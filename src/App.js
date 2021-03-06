// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

// Styles
import './App.css';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main_content">
          <Routes>
            <Route path="/portifolio-reactjs/" element={<Home />} />
            <Route path="/portifolio-reactjs/aboutme" element={<AboutMe />} />
            <Route path="/portifolio-reactjs/projects" element={<Projects />} />
            <Route path="/portifolio-reactjs/contact" element={<Contact />} />
          </Routes>
        </div>
        <BackToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
