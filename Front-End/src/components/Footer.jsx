export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white py-12 px-6 text-center overflow-hidden mt-[-1px]">
            {/* Subtle Glow Behind */}
            <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] z-0 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-sm tracking-tight">
                    Highlight Text AI
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                    © {new Date().getFullYear()} Built with <span className="text-red-500">❤️</span> for productivity lovers & deep thinkers.
                </p>

                <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-400">
                    <a href="#features" className="hover:text-white transition-colors">
                        Features
                    </a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">
                        How it Works
                    </a>
                    <a href="/pdf-chat" className="hover:text-white transition-colors">
                        PDF Chat
                    </a>
                    <a href="https://chromewebstore.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Add to Chrome
                    </a>
                </div>

                <div className="mt-8 text-xs text-gray-500">
                    Made by Shyam G with a little ✨ AI magic.
                </div>
            </div>
        </footer>
    );
}
