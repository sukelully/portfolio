import aboutMePic from '@/images/about-pic.webp';

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
          className="w-3/4 rounded-tl-[30%] rounded-tr-xl rounded-br-[30%] rounded-bl-xl border-[0.5rem] border-teal-900 sm:w-2/5"
        />
        <p className="text-lg">
          I'm a driven, detail-oriented full-stack developer with a background in Electronic
          Engineering and Music Technology Systems. I love building interactive, user-focused web
          apps—combining creativity and technical precision. From real-time audio synthesis projects
          like Unwind Chimes to sleek, responsive interfaces in React, TypeScript, and Next.js, I
          bring ideas to life from concept to deployment. Feel free to reach out using my contact
          details below.
        </p>
      </div>
    </section>
  );
}

export default AboutMeSection;
