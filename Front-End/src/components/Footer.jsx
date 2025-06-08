export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-lg font-semibold mb-2 drop-shadow">
                    Highlight Text AI
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                    © {new Date().getFullYear()} Built with <span className="text-red-500">❤️</span> for productivity lovers.
                </p>
                <div className="flex justify-center space-x-8 text-sm text-gray-400">
                    <a href="#features" className="hover:text-white transition-colors">
                        Features
                    </a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">
                        How it Works
                    </a>
                    <a href="/pdf-chat" className="hover:text-white transition-colors">
                        PDF Chat
                    </a>
                </div>
            </div>
        </footer>

    )
}