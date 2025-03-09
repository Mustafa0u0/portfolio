import React from 'react';

const ProjectCard = ({ image, title, github, demo }) => (
  <div className="p-6 bg-gray-100 border border-gray-400 rounded-2xl text-center">
    <div className="mb-4">
      <img src={image} alt={title} className="rounded-2xl w-3/4 h-3/4 mx-auto object-cover" />
    </div>
    <h2 className="text-xl my-4">{title}</h2>
    <div className="flex justify-center gap-4">
      <button
        onClick={() => (window.location.href = github)}
        className="border border-gray-600 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition"
      >
        Github
      </button>
      <button
        onClick={() => (window.location.href = demo)}
        className="border border-gray-600 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition"
      >
        Live Demo
      </button>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-10 px-4">
      <p className="text-center font-semibold">Browse My Recent</p>
      <h1 className="text-3xl text-center mb-8">Projects</h1>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-8">
          <ProjectCard
            image="/assets/project-1.png"
            title="Project One"
            github="https://github.com/"
            demo="https://github.com/"
          />
          <ProjectCard
            image="/assets/project-2.png"
            title="Project Two"
            github="https://github.com/"
            demo="https://github.com/"
          />
          <ProjectCard
            image="/assets/project-3.png"
            title="Project Three"
            github="https://github.com/"
            demo="https://github.com/"
          />
        </div>
      </div>
  
    </section>
  );
};

export default Projects;
