import '@/App.css';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import ProjectSection from '@/components/ProjectSection';
import AboutMeSection from '@/components/AboutMeSection';
import ContactSection from '@/components/ContactSection';

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl">
        <HeroSection />
        <TechStack />
        <hr className="separator" />
        <ProjectSection />
        <hr className="separator" />
        <AboutMeSection />
        <hr className="separator" />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
