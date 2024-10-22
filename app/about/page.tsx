import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className='font-semibold text-center bg-black border-spacing-4 border-black border-2 mx-0 py-4 flex-auto text-4xl text-white mb-4'>
        About Me
      </h2>
      <p className="text-lg leading-relaxed text-justify font-semibold mb-4">
        Hello! I’m Talha Rafique, a passionate web developer with experience in front-end technologies. 
        I have a knack for creating beautiful, responsive websites that provide excellent user experiences. 
        I am proficient in HTML, CSS, JavaScript, and frameworks like React. In addition to development, 
        I enjoy learning about design principles and applying them to my projects.
      </p>
      
      <p className="text-lg leading-relaxed text-justify font-semibold mb-4">
        I believe in continuous learning and strive to stay updated with the latest technologies and trends 
        in the web development world. My goal is to create impactful solutions that help businesses grow 
        and succeed online.
      </p>
      
      <p className="text-lg leading-relaxed text-justify font-semibold mb-4">
        When I am not coding, you can find me exploring the latest tech trends, watching tutorial videos, 
        or spending time with my family and friends.
      </p>
    </div>
  );
}

export default About;
