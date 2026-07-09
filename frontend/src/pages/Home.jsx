import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {

    const learnmore = () => {
        window.location.href = "#about"
    }

    const meetTeam = () => {
        window.location.href = "#team"
    }

    return (
        <div className='main mb-6'>
            <div className="main-header relative">

                <div className="background-image relative h-screen w-full">
                    <img className="w-full h-full object-cover" src={assets.backgroundImage} alt="" />
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div id='home' className="absolute inset-0">
                        <Navbar />

                        <div className="content-side mt-[100px]">
                            <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-10 gap-10">

                                <motion.div initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }} className="text-content w-full lg:w-[60%]">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl leading-snug font-semibold text-white">
                                        Transform complex energy utilization into
                                        <span className="text-green-500"> Intelligent AI System.</span>
                                    </h1>

                                    <p className="text-xs lg:text-base text-white mt-0 lg:mt-4 w-full w-full md:w-[60%] pt-2">
                                        AgenWatt combines IoT, AI and automation to continuously optimize reduce energy waste, lower cost and build a sustainable future.
                                    </p>

                                    <div className="gap-2 flex flex-wrap mt-4">
                                        <button onClick={learnmore} className=" px-4 py-2 bg-green-500 text-white rounded-full text-xs lg:text-sm hover:bg-green-600 transition-colors duration-300">
                                            Learn More
                                        </button>

                                        <button onClick={meetTeam} className=" px-4 py-2 border border-green-500 text-green-500 rounded-full text-xs lg:text-sm hover:bg-green-500 hover:text-white transition-colors duration-300">
                                            Meet the Team
                                        </button>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-white p-4 rounded-lg flex flex-col gap-3 bg-black/50 w-full sm:w-[280px] lg:w-[320px] text-xs shadow-lg shadow-black/50"
                                >

                                    <div className="border-b p-3 flex items-center gap-3">

                                        <div className="rounded-full border border-green-500 p-2 flex-shrink-0">
                                            <img
                                                className="w-4 h-4 lg:w-5 lg:h-5 object-contain"
                                                src={assets.energy_efficient}
                                                alt=""
                                            />
                                        </div>

                                        <div>
                                            <h1 className="text-xs lg:text-sm">
                                                Energy Saving
                                            </h1>

                                            <p className="font-bold text-sm lg:text-base">
                                                20% -30%
                                            </p>
                                        </div>

                                    </div>


                                    <div className="border-b p-3 flex items-center gap-3">

                                        <div className="rounded-full border border-green-500 p-2 flex-shrink-0">
                                            <img
                                                className="w-4 h-4 lg:w-5 lg:h-5 object-contain"
                                                src={assets.down_arrow}
                                                alt=""
                                            />
                                        </div>

                                        <div>
                                            <h1 className="text-xs lg:text-sm">
                                                Cost Reduction
                                            </h1>

                                            <p className="font-bold text-sm lg:text-base">
                                                15% -25%
                                            </p>
                                        </div>

                                    </div>


                                    <div className="p-3 flex items-center gap-3">

                                        <div className="rounded-full border border-green-500 p-2 flex-shrink-0">
                                            <img
                                                className="w-4 h-4 lg:w-5 lg:h-5 object-contain"
                                                src={assets.stats}
                                                alt=""
                                            />
                                        </div>

                                        <div>
                                            <h1 className="text-xs lg:text-sm">
                                                Sustainability Impact
                                            </h1>

                                            <p className="font-bold text-sm lg:text-base">
                                                Better Tomorrow
                                            </p>
                                        </div>

                                    </div>


                                </motion.div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* About Section */}

            <motion.div initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }} id='about' className="About section min-h-[300px] pt-10 lg:pt-0 px-6 md:px-10 flex flex-col lg:flex-row justify-between items-center gap-8">

                <div className="w-full lg:w-[50%]">

                    <span className="px-4 py-2 rounded-full border border-green-500 text-green-600 text-xs lg:text-sm font-medium">
                        About AgenWatt
                    </span>

                    <h1 className="text-xl md:text-3xl font-semibold mt-6">
                        A bridge between physical infrastructure and intelligent decision making.
                    </h1>

                </div>


                <div className="w-full lg:w-[50%]">

                    <p className="text-xs lg:text-base ">
                        Modern energy systems are becoming more distributed, more instrumented,
                        and harder to operate with traditional monitoring alone.
                        AgenWatt is designed to help industrial and enterprise teams interpret
                        infrastructure signals at a higher level and make better energy decisions
                        with confidence.
                    </p>

                </div>

            </motion.div>



            {/* System Flow */}

            <motion.div initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }} className="services-section min-h-[350px] bg-gray-100 mt-5 px-6 md:px-10 flex flex-col items-center">

                <div className="mt-10 text-center">

                    <span className="px-4 py-2 rounded-full border border-green-500 text-green-600 text-xs lg:text-sm font-medium">
                        System Flow
                    </span>

                    <h1 className="text-xl md:text-3xl font-semibold pt-6">
                        How AgenWatt Works
                    </h1>


                    <div className="flow mt-5 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-4">

                        <div className="border p-4 bg-white rounded-xl shadow-lg shadow-gray-300">
                            <h1 className="font-semibold text-xs lg:text-lg">Data Collection</h1>
                            <p className="text-xs lg:text-md mt-2">
                                Smart sensors collect real-time data.
                            </p>
                        </div>

                        <div className="border p-4 bg-white rounded-xl shadow-lg shadow-gray-300">
                            <h1 className="font-semibold text-xs lg:text-lg">Data Analysis</h1>
                            <p className="text-xs lg:text-md mt-2">
                                Analyze data to identify patterns.
                            </p>
                        </div>

                        <div className="border p-4 bg-white rounded-xl shadow-lg shadow-gray-300">
                            <h1 className="font-semibold text-xs lg:text-lg">Smart Decisions</h1>
                            <p className="text-xs lg:text-md mt-2">
                                AI predicts and recommend actions.
                            </p>
                        </div>

                        <div className="border p-4 bg-white rounded-xl shadow-lg shadow-gray-300">
                            <h1 className="font-semibold text-xs lg:text-lg">Agentic Actions</h1>
                            <p className="text-xs lg:text-md mt-2">
                                Systems are optimized automatically.
                            </p>
                        </div>

                        <div className="border p-4 bg-white rounded-xl shadow-lg shadow-gray-300">
                            <h1 className="font-semibold text-xs lg:text-lg">Energy Savings</h1>
                            <p className="text-xs lg:text-md mt-2">
                                Lower energy costs and improve efficiency.
                            </p>
                        </div>

                    </div>

                </div>

            </motion.div>
            {/* Team Section */}

            <motion.div initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }} id='team' className="Team-section bg-black min-h-[400px] pt-10">

                <div className="relative min-h-full w-full">

                    <img
                        className="w-full h-full object-cover absolute inset-0"
                        src={assets.secondbackground}
                        alt=""
                    />

                    <div className="relative bg-black/90 py-10 px-6 md:px-10">

                        <div className="text-center">

                            <span className="px-4 py-2 rounded-full bg-green-500 text-white text-xs lg:text-sm font-medium">
                                Our Dedicated Members
                            </span>

                            <h1 className="hidden lg:block text-3xl font-semibold text-white pt-4">
                                Team Behind AgenWatt
                            </h1>

                        </div>


                        <div className="team-members mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">


                            <div className="flex flex-col items-center">
                                <div className=" w-[120px]  lg:w-[150px]  lg:h-[150px] bg-white border-4 border-white  rounded-full overflow-hidden shadow-lg">
                                    <img src={assets.fakhir} alt="" />
                                </div>

                                <h1 className=" text-xs lg:text-base text-center pt-2">
                                    Fakhir Shaukat
                                </h1>

                                <p className="text-center pt-2 text-xs lg:text-sm text-gray-500">
                                    Co-Founder & Mernstack Developer
                                </p>
                            </div>


                            <div className="flex flex-col items-center">
                                <div className="w-[120px]  lg:w-[150px]  lg:h-[150px] bg-white border-4 border-white  rounded-full overflow-hidden shadow-lg">
                                    <img src={assets.batool} alt="" />
                                </div>

                                <h1 className="text-center pt-2 text-xs lg:text-base">
                                    Syeda Batool Hassan
                                </h1>

                                <p className="text-center pt-2 text-xs lg:text-sm text-gray-500">
                                    Co-Founder & MLOps Engineer
                                </p>
                            </div>

                            <div className="flex flex-col items-center ">
                                <div className="w-[120px]  lg:w-[150px]  lg:h-[150px] bg-white border-4 border-white  rounded-full overflow-hidden shadow-lg">
                                    <img src={assets.humema} alt="" />
                                </div>

                                <h1 className="text-center pt-2 text-xs lg:text-base">
                                    Humema Akhtar
                                </h1>

                                <p className="text-center pt-2 text-xs lg:text-sm text-gray-500">
                                    Co-Founder & Data Scientist
                                </p>
                            </div>


                            <div className="flex flex-col items-center">
                                <div className="w-[120px]  lg:w-[150px]  lg:h-[150px] bg-white border-4 border-white  rounded-full overflow-hidden shadow-lg">
                                    <img className='w-full h-full object-cover ' src={assets.abdullah} alt="" />
                                </div>

                                <h1 className="text-center pt-2 text-xs lg:text-base">
                                    Muhammad Abdullah
                                </h1>

                                <p className="text-center pt-2 text-xs lg:text-sm text-gray-500">
                                    Co-Founder & AI Engineer
                                </p>
                            </div>


                        </div>

                    </div>

                </div>

            </motion.div>



            {/* Partner Section */}

            <motion.div initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }} id='partners' className="Partner-section py-16 px-6 md:px-10 flex justify-center items-center bg-white">

                <div className="max-w-3xl text-center">


                    <span className="inline-block px-4 py-2 rounded-full border border-green-500 text-green-600 text-xs lg:text-base font-medium">
                        About AgenWatt
                    </span>


                    <h1 className="mt-6 text-xl w-full md:text-4xl font-bold text-gray-900">
                        Proudly Incubated & Supported By
                    </h1>


                    <p className="mt-4 text-gray-600 leading-relaxed text-xs lg:text-base">
                        AgenWatt is proudly incubated and supported by our university,
                        providing the mentorship, research environment, and innovation
                        ecosystem that help transform ambitious ideas into impactful
                        technology solutions.
                    </p>



                    <div className="mt-10 flex justify-center">

                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">

                            <img
                                className="w-40 md:w-48 object-contain"
                                src={assets.universityLogo}
                                alt="University Logo"
                            />

                        </div>

                    </div>


                </div>

            </motion.div>

            <motion.div initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }} id='contact' className="relative mx-4 md:mx-8 mt-16 overflow-hidden rounded-3xl bg-[#071C18]">


                <img
                    src={assets.thirdbackground}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />


                <div className="absolute inset-0 bg-gradient-to-r from-[#071C18] via-[#071C18]/80 to-transparent"></div>



                <div className="relative z-10 flex flex-col px-6 md:px-16 py-12 md:py-16">


                    <div className="max-w-xl">


                        <h1 className="text-xl md:text-4xl font-bold text-white">

                            Ready to Make Your Building Smarter
                            <br className="hidden md:block" />
                            and More Efficient?

                        </h1>


                        <p className="mt-5 text-gray-300 text-xs lg:text-base">
                            Let's work together to create a smarter and sustainable future.
                        </p>



                        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white text-xs lg:text-base px-4 py-2 rounded-full font-medium">

                            Contact Us

                        </button>
                        <div className="flex items-center mt-4 gap-2">
                            <div className='border rounded-full p-2 border border-red-500'><img className='w-4' src={assets.call} alt="Call" /></div>
                            <div className='text-white'>
                                <p className="text-xs lg:text-sm ">+92 331 2608373</p>
                                <p className="text-xs lg:text-sm">+92 303 2144977</p>
                            </div>

                        </div>


                    </div>


                </div>




                {/* Footer */}
                <Footer />


            </motion.div>
        </div>
    )
}

export default Home