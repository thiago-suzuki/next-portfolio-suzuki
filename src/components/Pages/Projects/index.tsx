"use client"

import { motion } from "framer-motion";

export function Projects() {
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
            <div className="text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8">
                        {/* Header Section */}
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-2">Projects</h1>
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

                                <button className="border border-gray-600 text-white px-6 py-2 rounded-md hover:border-orange-500 hover:bg-orange-500/10 transition">
                                Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}