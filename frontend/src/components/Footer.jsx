import React from 'react'
import {motion} from 'framer-motion'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (

                <div className="relative z-10 border-t border-gray-700 px-6 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-6 mb-6">


                    
                    <div className="flex items-center gap-3">

                        <a href="#home">
                            <img src={assets.logo} className="w-12" alt="Logo" />
                        </a>


                        <div>

                            <h3 className="text-white font-semibold font-gruppo">
                                AGENWATT
                            </h3>

                            <p className="text-xs text-gray-400">
                                Smarter Energy. Greener Future.
                            </p>

                        </div>


                    </div>



                    <div className="flex flex-col md:flex-row items-center gap-5 text-gray-400 text-sm text-center">

                        <p>
                            © 2025 AgenWatt. All rights reserved.
                        </p>


                        <p className="hover:text-white cursor-pointer">
                            Privacy Policy
                        </p>


                        <div>
                            <p>+92 331 2608373</p>
                            <p>+92 303 2144977</p>
                        </div>


                    </div>



                </div>
  )
}

export default Footer
