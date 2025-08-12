import '@/App.css';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl">
        <HeroSection />
        <TechStack />
      </main>
    </>
  );
}

export default App;
