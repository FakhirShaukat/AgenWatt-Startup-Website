import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Navbar = () => {

    const  getstarted = ()=>{
        window.location.href = "#contact"
    }

    const [open, setOpen] = useState(false);

    return (
        <div className="navbar w-full fixed top-0 z-50 backdrop-blur-xl bg-black/40  ">

            <div className="flex  justify-between lg:justify-center items-center  gap-0 lg:gap-40  px-6 py-4 md:px-8 md:py-2 border-b border-white/20 text-white">

                {/* Logo */}
                <a href="#home">
                    <div className=" w-10 flex flex-col items-center justify-center ">
                        <img className="w-full h-full object-cover" src={assets.logo} alt="Logo" />
                        <h1 className="hidden lg:block text-sm font-bold font-gruppo">AGENWATT</h1>
                    </div>
                </a>



                {/* Desktop Navigation */}
                <div className="hidden md:flex nav-links">
                    <ul className="flex gap-6 text-sm">
                        <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"><a href="#home">Home</a></li>
                        <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"><a href="#about">About Us</a></li>
                        <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"><a href="#team">Our Team</a></li>
                        <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"><a href="#partners">Partners</a></li>
                        <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>


                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button onClick={getstarted} className="px-5 py-2 rounded-full bg-green-500 text-white text-sm hover:bg-green-600 transition-colors duration-300">
                        Get Started
                    </button>
                </div>


                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>


            </div>



            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 md:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}



            {/* Mobile Sidebar */}

            <div
                className={`
          fixed top-0 right-0 h-screen w-72
          bg-black/100 backdrop-blur-xl
          text-white
          transform transition-transform duration-300
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
            >

                <div className="flex justify-between items-center px-6 py-5 border-b border-white/20">

                    <div className=" w-10 gap-1">
                        <img className="w-full h-full object-cover" src={assets.logo} alt="Logo" />
                        <h1 className=" text-sm font-bold font-gruppo ">AGENWATT</h1>
                    </div>
                    <button
                        className="text-2xl"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>

                </div>



                <ul className="flex flex-col gap-6 px-6 py-10 text-lg">

                    <li>
                        <a href="#home" onClick={() => setOpen(false)}>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" onClick={() => setOpen(false)}>
                            About Us
                        </a>
                    </li>

                    <li>
                        <a href="#team" onClick={() => setOpen(false)}>
                            Our Team
                        </a>
                    </li>
                    <li>
                        <a href="#partners" onClick={() => setOpen(false)}>
                            Partners
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={() => setOpen(false)}>
                            Contact Us
                        </a>
                    </li>


                    <li>
                        <button className="mt-4 px-5 py-2 rounded-full bg-green-500">
                            Get Started
                        </button>
                    </li>

                </ul>


            </div>


        </div>
    )
}

export default Navbar