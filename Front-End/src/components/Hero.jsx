import { Link } from "react-router-dom";
import logo from "../assets/banner-img.png"; // replace with actual path

import Tilt from "react-parallax-tilt";

export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white h-[100dvh] flex items-center justify-center overflow-hidden px-4 py-24">
            {/* Blurred Background Bubbles */}
            <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            {/* Layout Container */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl w-full px-4">
                {/* Left: Clean Text Section */}
                <div className="w-full md:w-1/2 px-10 py-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow">
                        Highlight Chat AI
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl mx-auto">
                        Instantly talk to AI about anything you highlight on the web. No
                        copy-pasting. Just select and ask.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="https://chromewebstore.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-xl text-white text-lg font-semibold shadow-md"
                        >
                            Add to Chrome
                        </a>
                        <Link
                            to="/pdf-chat"
                            className="bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-gray-100 transition-colors"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>

                <Tilt
                    scale={1.2}
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    className="w-full md:w-1/2 flex items-center justify-center"
                >
                    <div className="relative w-full flex justify-center">
                        {/* Optional Soft Glow */}
                        <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-600 blur-3xl opacity-25"></div>

                        {/* Logo Image scaled up */}
                        <img
                            src={logo}
                            alt="Highlight Chat AI Logo"
                            className="relative max-h-[100vh] w-auto object-contain"
                        />
                    </div>
                </Tilt>
            </div>
        </section>
    );
}
