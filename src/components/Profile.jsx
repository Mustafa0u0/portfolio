import React from 'react';

const Profile = () => {
  return (
    <section id="profile" className="flex flex-col lg:flex-row justify-center items-center gap-10 h-[80vh] px-4">
      <div className="w-80 h-80 lg:w-[400px] lg:h-[400px]">
        <img
          src="/assets/profile-pic.png"
          alt="John Doe profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="font-semibold">Hello, I'm</p>
        <h1 className="text-3xl">John Doe</h1>
        <p className="text-xl mb-4">Frontend Developer</p>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => window.open('/assets/resume-example.pdf')}
            className="px-4 py-2 rounded-full font-semibold border border-gray-600 hover:bg-gray-700 hover:text-white transition"
          >
            Download CV
          </button>
          <button
            onClick={() => (window.location.href = '/#contact')}
            className="px-4 py-2 rounded-full font-semibold border border-gray-600 hover:bg-black hover:text-white transition"
          >
            Contact Info
          </button>
        </div>
        <div className="flex justify-center gap-4" id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="My LinkedIn profile"
            className="h-8 cursor-pointer"
            onClick={() => (window.location.href = 'https://linkedin.com/')}
          />
          <img
            src="/assets/github.png"
            alt="My Github profile"
            className="h-8 cursor-pointer"
            onClick={() => (window.location.href = 'https://github.com/')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
