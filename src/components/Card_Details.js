import React from 'react'
import Header from '../components/Header';
// import img from './../images/course3.jpg'
import { newLogo } from '../assets';
// import  img1 from './../images/bgimage.jpg'




function Card_Details() {
  return (
    <div>
        <div><p><br></br></p></div>
        <div><p><br></br></p></div>
        <div><p><br></br></p></div>
        <div><p><br></br></p></div>
        <div><p><br></br></p></div>
        <div><p><br></br></p></div>
        <div><p><br></br></p></div>
        <div><p><br></br></p></div>
        <div><p><br></br></p></div>
        <div className='h-screen w-screen' style={{ backgroundImage: `url(${newLogo})` }}>
            
            <h1 className='font-bold p-2 text-white text-center'>Bounty Details</h1>
            <section className="bg-gray-800 opacity-75   rounded-2xl body-font mx-8">
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font text-left sm:text-4xl text-3xl mb-4 font-medium text-green-400">Beach Cleaning Drive at
                    <br className="hidden lg:inline-block"/>Dadar Chaupaty
                </h1>
                <p className="mb-8 leading-relaxed text-white text-left">Goals: LCopper mug try-hard pitchfork pour-over freegan </p>
                <p className="mb-8 leading-relaxed text-white text-left">Verification: LCopper mug try-hard pitchfork pour-over freegan </p>
                <p className="mb-8 leading-relaxed text-white text-left">Cause Category: LCopper mug try-hard pitchfork pour-over freegan </p>

                <div className="flex justify-center">
                    <button className="inline-flex text-black font-semibold bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Claim</button>                  
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src={newLogo}/>
                </div>
            </div>
            </section>
            GitHub
                    </div>
                </div>
  )
}

export default Card_Details
