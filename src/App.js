import './App.css';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <div className="section-spacing"></div>
      <Skills />
      <Contact />
    </div>
  );
}