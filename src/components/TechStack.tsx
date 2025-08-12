import { techStack } from '@/data/projects';

function TechStack() {
  return (
    <div id="tech-stack" className="mx-auto my-12 w-3/4">
      <h3 className="text-center text-3xl">Tech Stack</h3>
      <ul className="mx-auto my-6 flex list-none flex-row flex-wrap items-center justify-center gap-4">
        {techStack.map((item) => (
          <li key={item} className="tech-stack-item">
            {item}
          </li>
        ))}
      </ul>
      <p className="text-lg">
        <strong>TypeScript</strong>, <strong>Next.js</strong>, and <strong>Tailwind</strong> are my
        go-to tools for crafting clean, scalable, full-stack applications.
      </p>
    </div>
  );
}

export default TechStack;
