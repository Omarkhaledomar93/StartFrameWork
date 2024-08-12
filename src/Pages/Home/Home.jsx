import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import avatar from '../../assets/Images/avatar.png'


export default function Home() {



    return (
        <div className='bodyBg  pt-10'>

            <div className='img w-1/4 mx-auto mb-12 '> 
            <img src={avatar} alt="" className='' />
            </div>
            <h1 className='text-center font-extrabold text-white uppercase text-5xl mb-4'>
            start Framework
            </h1>
            <div className='flex items-center justify-center mb-3'>
                <div className='w-12 h-0.5 bg-white mx-3'></div>
                <i className='fa-solid fa-star text-white text-2xl'></i>
                <div className='w-12 h-0.5 bg-white mx-3'></div>
            </div>
          
            <div className=" w-3/4 text-center mx-auto text-white  pb-10">

            <span>Graphic Artist - Web Designer - Illustrator </span>
               
            </div>
        </div>
    );
}



