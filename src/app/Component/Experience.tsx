"use client";

import { LinkedInIcon, PhygitalTechIcon } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  description?: string;
  duration: string;
  points: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PhygitalTech",
    role: "Software Developer",
    duration: "Oct 2024 – Present",
    description:
      "Worked as a Full-Stack Developer building end-to-end applications, managing both frontend and backend, and deploying solutions to production.",
    points: [
      "Developed responsive and scalable UIs with React and managed state efficiently using TanStack Query.",
      "Built robust backend APIs with Node.js, Express, and Prisma, integrating with PostgreSQL for data persistence.",
      "Designed database schemas, optimized queries, and implemented secure authentication and authorization flows.",
      "Managed full application lifecycle including testing, deployment, and monitoring on platforms like OVIPanel.",
      "Developed and maintained an Android application, ensuring smooth integration with backend services.",
      "Collaborated with cross-functional teams to deliver production-ready features in agile sprints.",
    ],
    skills: [
      "React",
      "TanStack Query",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JavaScript",
      "TypeScript",
      "Android Development",
    ],
  },
  {
    company: "PhygitalTech",
    role: "Software Developer Intern",
    duration: "Jul 2024 – Sept 2024",
    description:
      "Contributed as a Frontend Developer Intern, working on modern UI implementations and optimizing performance.",
    points: [
      "Implemented responsive UI components using React and TailwindCSS.",
      "Improved performance and accessibility across multiple client projects.",
      "Collaborated with senior developers on agile sprints, learning industry best practices.",
    ],
    skills: ["React", "TailwindCSS", "JavaScript", "Git", "GitHub"],
  },
];

const Experience: React.FC = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="experience"
      className="w-full py-20 bg-black text-white px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="relative border-l border-neutral-800">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndexes.includes(index);
            const pointsToShow =
              isDesktop || isExpanded ? exp.points : exp.points.slice(0, 2);

            return (
              <div
                key={index}
                className="mb-12 ml-6 bg-[#171717] p-4 rounded-lg rounded-tl-none"
              >
                <div className="flex gap-2 items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={PhygitalTechIcon}
                      alt="companyIcon"
                      width={35}
                    />
                    <h1 className="text-sm">{exp.company}</h1>
                  </div>
                  <p className="text-gray-400 text-xs border border-neutral-700 rounded-full px-2.5 py-1">
                    {exp.duration}
                  </p>
                </div>

                <div className="absolute w-3 h-3 bg-white rounded-full  -left-1.5 border border-neutral-800"></div>

                <h3 className="text-sm my-2.5 font-semibold">{exp.role}</h3>
                <p className="text-gray-300 text-sm">{exp.description}</p>

                <ul className="mt-3 list-disc list-inside text-sm text-gray-300 space-y-1 ml-5">
                  {pointsToShow.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* View More button only for mobile */}
                {!isDesktop && exp.points.length > 2 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-gray text-sm underline"
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </button>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-neutral-900 border border-neutral-700 rounded-full text-gray-300 hover:bg-neutral-800 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
