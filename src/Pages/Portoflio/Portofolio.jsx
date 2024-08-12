import React from 'react';
import poert1 from '../../assets/Images/poert1.png';
import port2 from '../../assets/Images/port2.png';
import port3 from '../../assets/Images/port3.png';

export default function Portfolio() {
  return (
    <div className="mt-20 min-h-screen">
      <div className="text-center pt-4 text-[#2c3e50]">
        <h2 className="uppercase mb-3 text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Portfolio Component
        </h2>
        <div className="flex items-center justify-center mb-3">
          <div className="w-8 md:w-12 h-0.5 bg-current mx-2 md:mx-3"></div>
          <i className="fa-solid fa-star text-xl md:text-2xl"></i>
          <div className="w-8 md:w-12 h-0.5 bg-current mx-2 md:mx-3"></div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div>
            <img src={poert1} alt="Poet 1" className="w-full h-auto border rounded-2xl hover:bg-green-500 transition duration-300" />
          </div>
          <div>
            <img src={port2} alt="Port 2" className="w-full h-auto border rounded-2xl hover:bg-green-500 transition duration-300" />
          </div>
          <div>
            <img src={port3} alt="Port 3" className="w-full h-auto border rounded-2xl hover:bg-green-500 transition duration-300" />
          </div>
          <div>
            <img src={poert1} alt="Poet 1" className="w-full h-auto border rounded-2xl hover:bg-green-500 transition duration-300" />
          </div>
          <div>
            <img src={port2} alt="Port 2" className="w-full h-auto border rounded-2xl hover:bg-green-500 transition duration-300" />
          </div>
          <div>
            <img src={port3} alt="Port 3" className="w-full h-auto border rounded-2xl hover:bg-green-500 transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
