import React from 'react';
import BannerImg from '../../assets/images/hero.png'

const Banner = () => {
    return (
        <div className=' min-h-[80vh] text-center  space-y-6 pt-[50px]'>
           <h1 className=' font-bold text-3xl'>We Build <br /> <span className=' text-purple-500'>Productive</span>Apps</h1>
           <p className=' text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital
            experiences that truly make an impact.
           </p>
         <div className=' flex justify-center gap-5'>
              <button className=' btn'>Paly Store</button>
           <button className=' btn'> App Store</button>
         </div>
         <img src={BannerImg} alt=""  className=' mx-auto'/>
        </div>
    );
};

export default Banner;