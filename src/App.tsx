import '@/App.css';

function App() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-teal-900 text-white">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
            <h1 className="text-3xl font-medium">sukelully.dev</h1>
            <div>
                <button id="hamburger-button" aria-label="Open mobile menu" aria-expanded="false"
                    className="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
                    <div
                        className="absolute top-4 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
                    </div>
                </button>
                <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
                    <a href="#hello" className="hover:opacity-90">Hello!</a>
                    <a href="#projects" className="hover:opacity-90">Projects</a>
                    <a href="#about-me" className="hover:opacity-90">About</a>
                    <a href="#contact" className="hover:opacity-90">Contact</a>
                </nav>
            </div>
        </section>

        <section id="mobile-menu"
            className="absolute top-68 bg-slate-100 dark:bg-neutral-950 w-full text-5xl flex-col justify-center origin-top animate-open-menu hidden">
            <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
                <a href="#hello" className="text-black dark:text-white w-full text-center py-6 hover:opacity-90">Hello!</a>
                <a href="#projects"
                    className="text-black dark:text-white w-full text-center py-6 hover:opacity-90">Projects</a>
                <a href="#about-me"
                    className="text-black dark:text-white w-full text-center py-6 hover:opacity-90">About</a>
                <a href="#contact"
                    className="text-black dark:text-white w-full text-center py-6 hover:opacity-90">Contact</a>
            </nav>
        </section>
    </header>
    </>
  );
}

export default App;
