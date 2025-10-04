import React from "react";
import Image from "next/image";
import {
  GithubIcon,
  ReactIcon,
  NodeJSIcon,
  TailwindIcon,
  NextJSIcon,
  PythonIcon,
  PostgresSQLIcon,
  TypeScriptIcon,
  GitIcon,
  ExpressJs,
  JavascriptIcon,
} from "@/assets";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "Next.js", icon: NextJSIcon },
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodeJSIcon },
  { name: "Express", icon: ExpressJs },
  { name: "TailwindCSS", icon: TailwindIcon },
  { name: "PostgreSQL", icon: PostgresSQLIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Git", icon: GitIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Python", icon: PythonIcon },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 bg-black text-white px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 flex justify-center gap-2 rounded-lg bg-[#171717] border border-neutral-800 text-gray-300 hover:bg-neutral-800 transition text-sm md:text-base"
            >
              <Image src={skill.icon} width={20} height={20} alt={skill.name} />
              <span className="text-white font-medium">{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
