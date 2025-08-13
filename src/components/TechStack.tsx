import { techStack } from '@/data/projects';

function TechStack() {
  return (
    <div id="tech-stack" className="mx-auto my-12">
      <h3 className="text-center text-3xl">Tech Stack</h3>
      <ul className="mx-auto my-6 flex list-none flex-row flex-wrap items-center justify-center gap-4">
        {techStack.map((item) => (
          <li key={item} className="tech-stack-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechStack;
