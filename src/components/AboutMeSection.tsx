import aboutMePic from '@/assets/about-pic.webp';

function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
        About Me
      </h2>
      <div className="flex flex-col items-center justify-center gap-12 md:mt-28 md:flex-row">
        <img
          src={aboutMePic}
          alt="A picture of me smiling at the camera whilst working at my desk."
          className="w-48 max-w-full rounded-tl-[30%] rounded-tr-xl rounded-br-[30%] rounded-bl-xl border-[0.5rem] border-teal-900 md:w-80 md:flex-shrink-0"
        />
        <p className="text-lg">
          I'm a full-stack developer with a knack for blending creativity and technical precision. I
          first discovered programming while studying Electronic Engineering with Music Technology
          Systems at university and was immediately hooked. After two years in electronics
          manufacturing, I fully retrained as a developer, bringing with me a problem-solving
          mindset and an eye for detail. I especially enjoy projects that combine code and sound,
          creating interactive and immersive experiences. Feel free to reach out using my contact
          details below.
        </p>
      </div>
    </section>
  );
}

export default AboutMeSection;
