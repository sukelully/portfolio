import heroPic from '@/images/hero-pic.webp';

function HeroSection() {
  return (
    <section
      id="hello"
      className="widescreen:section-min-height tallscreen:section-min-height flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white">
          Full-Stack Developer with an{' '}
          <span className="text-secondary dark:text-indigo-300">Engineering Background</span>
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-left dark:text-slate-400">
          Hi! I'm a full-stack developer with a background in electronic engineering and audio
          technology.
        </p>
      </article>
      <div id="image-container" className="flex flex-row items-end gap-4">
        <img
          className="w-1/2"
          src={heroPic}
          alt="A selfie of myself in an aircraft wearing a headset!"
        />
        <div className="bg-primary typing-cursor h-3 w-1/3"></div>
      </div>
    </section>
  );
}

export default HeroSection;
