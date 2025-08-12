import '@/App.css';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import ProjectSection from '@/components/ProjectSection';

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl">
        <HeroSection />
        <TechStack />
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <ProjectSection />
      </main>
    </>
  );
}

export default App;
