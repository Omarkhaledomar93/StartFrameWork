import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
  return (
    <div className='bodyBg w-full md:w-full lg:w-full p-8 md:p-16 lg:p-32 mx-auto'>
      <h1 className='text-center font-extrabold text-white uppercase text-3xl md:text-4xl lg:text-5xl mb-4'>
        About Component
      </h1>
      <div className='flex items-center justify-center mb-3'>
        <div className='w-8 md:w-12 h-0.5 bg-white mx-2 md:mx-3'></div>
        <i className='fa-solid fa-star text-white text-xl md:text-2xl'></i>
        <div className='w-8 md:w-12 h-0.5 bg-white mx-2 md:mx-3'></div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-11/12 lg:w-3/4 text-center mx-auto text-white">
        <div className="md:w-1/2 md:pr-5 mb-4 md:mb-0">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files, including HTML, CSS, and JavaScript, as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="md:w-1/2 md:pl-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files, including HTML, CSS, and JavaScript, as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  );
}
