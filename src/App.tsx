import { Experience } from './components/sections/Experience';
import { HeroSection } from './components/sections/HeroSection';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Footer } from './components/ui/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen transition-colors duration-300">
      <HeroSection />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
