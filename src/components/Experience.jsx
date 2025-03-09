import React from 'react';

const ExperienceItem = ({ title, level }) => (
  <article className="flex items-center gap-2 w-40">
    <img src="/assets/checkmark.png" alt="Experience icon" className="h-6" />
    <div>
      <h3>{title}</h3>
      <p>{level}</p>
    </div>
  </article>
);

const Experience = () => {
  return (
    <section id="experience" className="relative py-10 px-4">
      <p className="text-center font-semibold">Explore My</p>
      <h1 className="text-3xl text-center mb-8">Experience</h1>
      <div className="flex flex-col items-center gap-8">
        {/* Frontend Development */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Frontend Development</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <ExperienceItem title="HTML" level="Experienced" />
            <ExperienceItem title="CSS" level="Experienced" />
            <ExperienceItem title="SASS" level="Intermediate" />
            <ExperienceItem title="JavaScript" level="Basic" />
            <ExperienceItem title="TypeScript" level="Basic" />
            <ExperienceItem title="Material UI" level="Intermediate" />
          </div>
        </div>
        {/* Backend Development */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Backend Development</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <ExperienceItem title="PostgreSQL" level="Basic" />
            <ExperienceItem title="Node JS" level="Intermediate" />
            <ExperienceItem title="Express JS" level="Intermediate" />
            <ExperienceItem title="Git" level="Intermediate" />
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default Experience;
