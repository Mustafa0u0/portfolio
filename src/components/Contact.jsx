import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center h-[70vh] py-10 px-4">
      <p className="text-center font-semibold">Get in Touch</p>
      <h1 className="text-3xl text-center mb-8">Contact Me</h1>
      <div className="flex flex-col sm:flex-row justify-center gap-8 bg-gray-100 border border-gray-400 rounded-2xl p-4 mb-8">
        <div className="flex items-center gap-2">
          <img src="/assets/email.png" alt="Email icon" className="h-10" />
          <p>
            <a href="mailto:examplemail@gmail.com" className="hover:underline">
              Example@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/assets/linkedin.png" alt="LinkedIn icon" className="h-10" />
          <p>
            <a href="https://www.linkedin.com" className="hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
