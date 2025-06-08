import { Link } from "react-router-dom";

export default function TryPdf() {
    return (
        <section className="py-20 bg-gray-900 px-6 text-center text-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-white drop-shadow">
                Need to Ask Questions from a PDF?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
                Upload your PDF and ask anything. Perfect for students, researchers, and professionals.
            </p>
            <img
                src="https://images.unsplash.com/photo-1745151485547-8d428247c1ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="PDF Chat"
                className="w-full max-w-3xl mx-auto mb-8 rounded-lg shadow-lg shadow-blue-700/50"
            />
            <Link
                to="/pdf-chat"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 text-lg font-medium shadow-md"
            >
                Go to PDF Chat →
            </Link>
        </section>

    )
}