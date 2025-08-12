function Header() {
  return (
    <header className="bg-primary sticky top-0 z-10 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">sukelully.dev</h1>
        <div>
          <button
            id="hamburger-button"
            aria-label="Open mobile menu"
            aria-expanded="false"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
          >
            <div className="absolute top-4 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <a href="#hello" className="hover:opacity-90">
              Hello!
            </a>
            <a href="#projects" className="hover:opacity-90">
              Projects
            </a>
            <a href="#about-me" className="hover:opacity-90">
              About
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
          </nav>
        </div>
      </section>

      <section
        id="mobile-menu"
        className="animate-open-menu absolute top-68 hidden w-full origin-top flex-col justify-center bg-slate-100 text-5xl dark:bg-neutral-950"
      >
        <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
          <a href="#hello" className="">
            Hello!
          </a>
          <a href="#projects" className="nav-link-mobile">
            Projects
          </a>
          <a href="#about-me" className="nav-link-mobile">
            About
          </a>
          <a href="#contact" className="nav-link-mobile">
            Contact
          </a>
        </nav>
      </section>
    </header>
  );
}

export default Header;
