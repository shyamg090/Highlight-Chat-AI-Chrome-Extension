import { Link } from "react-router-dom";
import logo from "../assets/banner-img.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white h-[100dvh] flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 py-24">
            {/* Blurred Background Bubbles */}
            <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />

            {/* Left Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center pt-[10%] md:text-left mb-12 md:mb-0 md:w-1/2 z-10 md:p-8 "
            >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow">
                    Highlight It. Ask Anything.
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-4">
                    Powered by AI. Built for students, professionals, researchers — and you.
                </p>

                <p className="text-xl font-semibold text-blue-400 mb-8 h-8">
                    <Typewriter
                        words={[
                            "Summarize legal documents.",
                            "Translate PDFs instantly.",
                            "Get insights from research papers.",
                            "Extract action items from emails.",
                            "Simplify complex blogs or news.",
                            "Ask questions on any web page.",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={40}
                        delaySpeed={2000}
                    />
                </p>

                <div className="w-full flex flex-col items-center md:items-start gap-4 mt-6">
                    {/* Primary Action Buttons */}
                    <div className="flex flex-row justify-center md:justify-start gap-4 flex-wrap w-full">
                        <a
                            href="https://chromewebstore.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white text-sm sm:text-lg font-semibold shadow-md text-center"
                        >
                            Add to Chrome
                        </a>

                        <Link
                            to="/pdf-chat"
                            className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-lg font-semibold shadow-md hover:bg-gray-100 transition-colors text-center"
                        >
                            Try PDF Chat →
                        </Link>
                    </div>

                    {/* Google SSO Button */}
                    <Link
                        to="/signin"
                        className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-lg font-semibold shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                        {/* <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-4 sm:w-5 h-4 sm:h-5"
                        /> */}
                        <span>Tap in for free. Let AI cook 🧠🔥</span>
                    </Link>
                </div>

            </motion.div>

            {/* Right Tilt Image */}
            <Tilt
                scale={1.2}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                className="w-full md:w-1/2 flex items-center justify-center z-10"
            >
                <div className="relative w-full flex justify-center">
                    <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-600 blur-3xl opacity-25" />
                    <img
                        src={logo}
                        alt="Highlight Chat AI Logo"
                        className="relative max-h-[100vh] w-auto object-contain"
                    />
                </div>
            </Tilt>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-900 z-0" />
        </section>
    );
}

