"use client"

import { motion } from "framer-motion";

export function About() {
    return (
        <motion.div 
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
        >
            <div className="text-white min-h-screen py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8">
                        {/* Header Section */}
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-2">About Me</h1>
                            <p className="text-gray-400">User Interface And User Experience And Also Video Editing</p>
                        </div>

                        {/* Main Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {/* Profile Image */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-md bg-black rounded-lg overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                                        alt="Professional portrait"
                                        className="w-full h-auto"
                                        keywords="professional, man, suit, formal, black, portrait, business"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="text-gray-400">
                                <p className="mb-6 leading-relaxed">
                                    A software engineer, the modern-day architect of digital realms, navigates the
                                    ethereal landscapes of code, sculpting intangible structures that shape our
                                    technological world. With fingers poised over keyboards like virtuoso pianists, they
                                    compose symphonies of logic, their minds a labyrinth of algorithms and
                                    solutions.Their canvas is a screen, a vast expanse where lines of code dance in
                                    intricate patterns, weaving the fabric of programs and applications. Each keystroke
                                    is a brushstroke, crafting intricate architectures and breathing life into
                                    innovative designs.In this digital atelier, they don the mantle of problem solvers,
                                    confronting bugs and glitches like valiant knights in an ever-evolving quest for
                                    perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden
                                    within the tangled webs of code. designs.In this digital atelier.
                                </p>

                                <button className="mr-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300">
                                    Contact me
                                </button>
                                <button className="border border-gray-600 text-white px-6 py-2 rounded-md hover:border-orange-500 hover:bg-orange-500/10 transition">
                                    Download CV
                                </button>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
                            {/* Figma */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">ƒƒ</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">100%</p>
                                <p className="text-gray-400">Figma</p>
                            </div>

                            {/* Adobe XD */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Xd</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">100%</p>
                                <p className="text-gray-400">Adobe XD</p>
                            </div>

                            {/* Adobe Photoshop */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-b-transparent border-r-transparent absolute top-0 left-0 transform rotate-[130deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Ps</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">85%</p>
                                <p className="text-gray-400">Adobe Photoshop</p>
                            </div>

                            {/* Adobe Illustrator */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-r-transparent absolute top-0 left-0 transform rotate-45"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Ai</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">60%</p>
                                <p className="text-gray-400">Adobe Illustrator</p>
                            </div>

                            {/* Adobe Premiere */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-b-transparent absolute top-0 left-0 transform rotate-[50deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Pr</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">70%</p>
                                <p className="text-gray-400">Adobe Premiere</p>
                            </div>

                            
                            {/* Adobe Premiere */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-b-transparent absolute top-0 left-0 transform rotate-[50deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Pr</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">70%</p>
                                <p className="text-gray-400">Adobe Premiere</p>
                            </div>

                            
                            {/* Adobe Premiere */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-b-transparent absolute top-0 left-0 transform rotate-[50deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Pr</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">70%</p>
                                <p className="text-gray-400">Adobe Premiere</p>
                            </div>

                            
                            {/* Adobe Premiere */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-b-transparent absolute top-0 left-0 transform rotate-[50deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Pr</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">70%</p>
                                <p className="text-gray-400">Adobe Premiere</p>
                            </div>

                            
                            {/* Adobe Premiere */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-b-transparent absolute top-0 left-0 transform rotate-[50deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Pr</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">70%</p>
                                <p className="text-gray-400">Adobe Premiere</p>
                            </div>

                            
                            {/* Adobe Premiere */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-b-transparent absolute top-0 left-0 transform rotate-[50deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Pr</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">70%</p>
                                <p className="text-gray-400">Adobe Premiere</p>
                            </div>

                            
                            {/* Adobe Premiere */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-b-transparent absolute top-0 left-0 transform rotate-[50deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Pr</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">70%</p>
                                <p className="text-gray-400">Adobe Premiere</p>
                            </div>

                            
                            {/* Adobe Premiere */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-l-transparent border-t-transparent border-b-transparent absolute top-0 left-0 transform rotate-[50deg]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">Pr</span>
                                    </div>
                                </div>
                                <p className="text-primary-500 text-xl font-bold mt-2">70%</p>
                                <p className="text-gray-400">Adobe Premiere</p>
                            </div>
                        </div>
                        {/* Next: "Add a projects section showcasing recent work" */}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}