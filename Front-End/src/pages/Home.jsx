import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import TryPdf from "../components/TryPdf.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <div className="font-sans">
            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <Features />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Try PDF Section */}
            <TryPdf />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
