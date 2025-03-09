import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center font-semibold text-gray-600">Get To Know More</p>
        <h1 className="text-4xl text-center font-bold mb-12">About Me</h1>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-80 h-80 lg:w-[400px] lg:h-[400px]">
            <img
              src="/assets/about-pic.png"
              alt="Profile"
              className="rounded-2xl w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-200 shadow-md">
                <img src="/assets/experience.png" alt="Experience icon" className="h-10 mb-2" />
                <h3 className="text-xl font-semibold">Experience</h3>
                <p className="text-center text-gray-500">
                  2+ years
                  <br />
                  Frontend Development
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-200 shadow-md">
                <img src="/assets/education.png" alt="Education icon" className="h-10 mb-2" />
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-center text-gray-500">
                  B.Sc. Bachelors Degree
                  <br />
                  M.Sc. Masters Degree
                </p>
              </div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
             
              <p>
                Hi, I’m Mustafa. I study at Aalbukhary International University, and I have a passion for exploring new technologies and design innovations. I love coding, collaborating on creative projects, and constantly learning to push the boundaries of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
