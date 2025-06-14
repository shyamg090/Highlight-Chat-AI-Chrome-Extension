import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";

export default function SignIn() {

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google"; // your Express backend SSO route
    };

    return (

        <div className="min-h-screen bg-gray-900 text-white flex flex-col-reverse md:flex-row">
            {/* Left Section - Illustration and branding */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center items-center md:bg-gradient-to-br md:from-gray-900 md:to-gray-800 relative overflow-hidden text-center">
                {/* <div className="z-10 text-center"> */}
                <h1 className="text-2xl md:text-6xl font-extrabold md:mb-6 tracking-tight drop-shadow">
                    Highlight It. Ask Anything.
                </h1>

                <p className="text-sm md:text-xl text-gray-300 mb-4">
                    Powered by AI. Built for students, professionals, researchers — and you.
                </p>

                <p className="text-md font-semibold text-blue-400 mb-8 h-8">
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
                {/* </div> */}

                {/* Animated Background Gradient Circles */}
                <div className="hidden md:block absolute w-72 h-72 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 -top-20 -left-20 blur-3xl animate-pulse" />
                <div className="hidden md:block absolute w-96 h-96 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full opacity-20 -bottom-28 -right-16 blur-3xl animate-pulse" />
            </div>

            {/* Right Section - SSO Login */}
            <div className="md:w-1/2 flex p-10 flex-col justify-center items-center bg-gray-900">
                <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-white drop-shadow">
                        Sign In
                    </h2>
                    {/* <p className="text-gray-400 text-sm text-center mb-8">
                        Secure login with your preferred provider.
                    </p> */}

                    <div className="flex flex-col gap-4">
                        {/* Google SSO Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center gap-3 bg-blue-100 hover:bg-blue-500 hover:text-white transition-colors text-black py-3 rounded-lg text-lg font-semibold shadow-md"
                        >
                            <FcGoogle className="md:text-xl text-sm" />
                            Continue with Google
                        </button>

                        {/* Add other SSO providers here if needed */}
                        {/* <button className="...">Continue with GitHub</button> */}
                    </div>
                </div>

                {/* Back Home */}
                <div className="mt-8">
                    <a
                        href="/"
                        className="text-blue-600 hover:text-blue-400 hover:underline transition-colors text-sm"
                    >
                        ← Back to homepage
                    </a>
                </div>
            </div>
        </div>

    );
}
