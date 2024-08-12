import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles

export default function Footer() {
  return (
    <footer className="footerBg py-6">
      <div className="flex flex-wrap justify-evenly align-bottom gap-10">
        <div className="card  rounded-lg">
          <div className="text-center ">
            <h3 className="text-xl font-bold uppercase mb-2 ">Location</h3>
            <p className='text-white'>2215 John Daniel Drive</p>
            <p className='text-white'>Clark, MO 65243</p>
          </div>
        </div>
        <div className="card rounded-lg text-white">
          <div className="text-center">
            <h3 className="text-xl font-bold uppercase mb-2">Around the Web</h3>
            <div className="flex justify-center gap-4 cursor-pointer">
              <i className="fa-brands fa-facebook text-2xl"></i>
              <i className="fa-brands fa-twitter text-2xl"></i>
              <i className="fa-brands fa-linkedin-in text-2xl"></i>
              <i className="fa-solid fa-globe text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="card  rounded-lg">
          <div className="text-center ">
            <h3 className="text-xl font-bold uppercase mb-2 ">About Freelancer</h3>
            <p className=' text-white w-2/4 mx-auto'> Freelance is a free-to-use, licensed Bootstrap 
              theme created by Route</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
