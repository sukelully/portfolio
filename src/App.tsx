import '@/App.css';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
