type ProjectCardProps = {
  projectName: string;
  description: string;
};

function ProjectCard({ projectName, description }: ProjectCardProps) {
  return (
    <div id="unwind-chimes" className="rounded-3xl bg-slate-300 p-8 shadow-xl dark:bg-slate-800">
      <h3 className="pb-6 text-center text-3xl font-bold sm:text-left sm:text-4xl">
        {projectName}
      </h3>
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <img
          src="./img/unwind-chimes.webp"
          className="w-3/4 sm:w-1/2"
          alt="Visual mockup for Unwind Chimes app featuring floating gradient balls and a central black orb on a minimal white canvas."
        />
        <p className="text-lg">{description}</p>
      </div>
      <div id="links-container" className="flex flex-row flex-wrap justify-center gap-8 pt-6">
        <a
          className="flex flex-row items-center rounded-lg bg-indigo-700 px-6 py-2 font-semibold text-nowrap text-white shadow-lg transition duration-300 hover:bg-indigo-800"
          href="https://sukelully.github.io/unwind-chimes/"
          target="_blank"
          rel="noopener noreferrer"
          aria-labelledby="visitSite-unwindchimes"
        >
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          <span id="visitSite-unwindchimes" className="pl-2">
            Visit Site
          </span>
        </a>
        <a
          className="flex flex-row items-center rounded-lg bg-indigo-700 px-6 py-2 font-semibold text-nowrap text-white shadow-lg transition duration-300 hover:bg-indigo-800"
          href="https://github.com/sukelully/unwind-chimes"
          target="_blank"
          rel="noopener noreferrer"
          aria-labelledby="githubLabel-unwindchimes"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
          <span id="githubLabel-unwindchimes" className="pl-2">
            Source Code
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
