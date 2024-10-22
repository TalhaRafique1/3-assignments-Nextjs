import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-center">Talha Rafique Portfolio</h1>
        <p className="text-xl text-center mt-4">
          Hi, I am Talha Rafique, a Frontend Developer who loves building clean and responsive websites.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          I specialize in creating visually appealing and functional websites using React, Next.js, and TypeScript.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">
              A brief description of Project 1 goes here. Explain its purpose, technology stack, and features.
            </p>
            <a
              href="https://github.com/TalhaRafique1/project-1" // Update with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project 1 on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-lg">
              A brief description of Project 2 goes here. Describe the project&apos;s features and technologies used.
            </p>
            <a
              href="https://github.com/TalhaRafique1/project-2" // Update with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project 2 on GitHub
            </a>
          </div>

          {/* Hackathon Project */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Hackathon Project</h3>
            <p className="text-lg">
              This is a project from my recent hackathon participation. You can find the source code on GitHub.
            </p>
            <a
              href="https://github.com/TalhaRafique1/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View the Hackathon Project on GitHub
            </a>
          </div>

          {/* Countdown Timer Project */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Countdown Timer</h3>
            <p className="text-lg">
              This is a countdown timer project built using React and JavaScript. You can explore it on GitHub.
            </p>
            <a
              href="https://github.com/TalhaRafique1/Countdown-timer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View the Countdown Timer Project on GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-center">
        <a
          href="https://linkedin.com/in/your-linkedin" // Update this with your actual LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Connect with me on LinkedIn
        </a>
      </footer>
    </div>
  );
};

export default Page;
