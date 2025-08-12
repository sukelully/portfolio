function TechStack() {
  return (
    <div id="tech-stack" className="mx-auto my-12 w-3/4">
      <h3 className="text-center text-3xl">Tech Stack</h3>
      <ul className="mx-auto my-6 flex list-none flex-row flex-wrap items-center justify-center gap-4">
        <li className="rounded-lg border border-slate-300 px-4 py-2 text-center dark:border-slate-600">
          JavaScript
        </li>
        <li className="rounded-lg border border-slate-300 px-4 py-2 text-center dark:border-slate-600">
          HTML/CSS
        </li>
        <li className="rounded-lg border border-slate-300 px-4 py-2 text-center dark:border-slate-600">
          Tailwind CSS
        </li>
        <li className="rounded-lg border border-slate-300 px-4 py-2 text-center dark:border-slate-600">
          Python
        </li>
        <li className="rounded-lg border border-slate-300 px-4 py-2 text-center dark:border-slate-600">
          React
        </li>
        <li className="rounded-lg border border-slate-300 px-4 py-2 text-center dark:border-slate-600">
          MySQL
        </li>
      </ul>
      <p className="text-lg">
        I primarily work with JavaScript, HTML and CSS, building clean, functional web interfaces
        from the ground up. I've recently added <span className="font-bold">React</span> and{' '}
        <span className="font-bold">Tailwind CSS</span> to my toolset to streamline development and
        enhance UI/UX, and I'm always keen to explore new technologies and level up my skills.
      </p>
    </div>
  );
}

export default TechStack;
