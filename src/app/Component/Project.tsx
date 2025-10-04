import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  space?: number;
}

const projects: Project[] = [
  {
    title: "Real-Time E-commerce Analytics System",
    description:
      "Core Java system simulating a Kafka-like streaming pipeline with producer-consumer threads, concurrency utilities, and real-time analytics aggregation. Features CLI controls, CSV export, and design patterns.",
    tech: ["Java", "Multithreading", "Concurrency", "Design Patterns"],
    github:
      "https://github.com/Prathamesh625/Real-Time-Ecommerce-Analytics-System",
    demo: "",
    space: 2,
  },
  {
    title: "E-commerce Store",
    description:
      "Full-stack eCommerce application with product browsing, cart, and secure checkout. Built with Next.js, PostgreSQL, and TypeScript, styled using ShadCN UI, and containerized with Docker.",
    tech: ["Next.js", "PostgreSQL", "TypeScript", "ShadCN UI", "Docker"],
    github: "https://github.com/Prathamesh625/ecommerce-app",
    demo: "",
  },
  {
    title: "Train Ticket Booking System",
    description:
      "End-to-end train booking platform with React frontend and Spring Boot backend. Designed JWT-secured REST APIs for booking, canceling, and managing schedules with PostgreSQL persistence.",
    tech: ["Spring Boot", "PostgreSQL", "React", "JWT", "Docker"],
    github: "https://github.com/username/train-ticket-booking",
    demo: "",
  },
  {
    title: "Expense Tracker API",
    description:
      "RESTful API to manage user-authenticated expense records. Implemented JWT-based security, role-based access control, and Dockerized deployment with Spring Boot and MySQL.",
    tech: ["Spring Boot", "MySQL", "JWT", "Docker"],
    github: "https://github.com/Prathamesh625/Expense-Tracker-Api",
    demo: "",
    space: 2,
  },
  {
    title: "Social Media App",
    description:
      "React + TypeScript application with Appwrite backend for authentication, file storage, and real-time updates. Features explore page, likes, saves, and responsive UI with smooth navigation.",
    tech: ["React", "TypeScript", "TailwindCSS", "Appwrite", "React Query"],
    github: "https://github.com/Prathamesh625/social_media_app.git",
    demo: "https://social-media-app-phi-one.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, TailwindCSS, and TypeScript to showcase projects, skills, and experience with a responsive and modern UI.",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/username/portfolio",
    demo: "https://yourportfolio.com",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 text-white px-6 md:px-12 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="flex justify-center gap-2 mb-10">
          <Link
            href="https://www.google.com/"
            className="px-5 py-2.5 bg-[#171717] text-white rounded-md text-sm border border-neutral-800 flex gap-4 items-center transform hover:scale-95 duration-200"
          >
            <span>View All Projects</span>
            <ArrowRight width={15} />
          </Link>
          <Link
            href="https://www.google.com/"
            className="px-5 py-2.5 bg-[#171717] text-white rounded-md text-sm border border-neutral-800 flex gap-2 items-center transform hover:scale-95 duration-200"
          >
            <GithubIcon width={20} />
            <span>Checkout GitHub</span>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 border bg-[#171717] border-neutral-800 rounded-xl hover:bg-neutral-900 transition flex flex-col col-span-${
                project.space ? project.space : 1
              } max-md:col-span-1`}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-md border border-neutral-700 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <span className="text-sm">Github</span>
                  <ExternalLink width={15} />
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white flex items-center gap-2"
                  >
                    <span className="text-sm">Live</span>
                    <ExternalLink width={15} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
