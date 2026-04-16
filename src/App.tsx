import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { HeroSection } from './components/sections/HeroSection';
import { Navbar } from './components/ui/Navbar';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Footer } from './components/ui/Footer';

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}