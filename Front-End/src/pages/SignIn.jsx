import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {

    const { login } = useAuth();
    const navigate = useNavigate();

    // You'd replace this with actual token after SSO flow
    const handleGoogleLogin = async () => {
        // Example: Redirect to backend SSO, then get token on callback
        const fakeToken = "your_sso_token"; // You'll actually get this from your backend
        login(fakeToken);
        navigate("/pdf-chat");
    };

    return (

        <div className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row">
            {/* Left Section - Illustration and branding */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center items-center md:bg-gradient-to-br md:from-gray-900 md:to-gray-800 relative overflow-hidden">
                <div className="z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">
                        Welcome to <span className="text-blue-600">Highlight Chat AI</span>
                    </h1>
                    <p className="text-gray-300 max-w-md mx-auto">
                        Ask AI anything from any text or PDF. Sign in to get started — no passwords needed.
                    </p>
                </div>

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
                    <p className="text-gray-400 text-sm text-center mb-8">
                        Secure login with your preferred provider.
                    </p>

                    <div className="flex flex-col gap-4">
                        {/* Google SSO Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center gap-3 bg-blue-100 hover:bg-blue-500 hover:text-white transition-colors text-black py-3 rounded-lg text-lg font-semibold shadow-md"
                        >
                            <FcGoogle className="text-2xl" />
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
