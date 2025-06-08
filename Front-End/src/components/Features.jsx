export default function Features() {
    return (

        <section className="py-20 bg-gray-900 text-gray-200 px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow">
                Features You'll Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {[
                    {
                        title: "🔍 Smart Highlight Detection",
                        img: "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=2887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        desc: "Automatically grabs selected text and lets AI provide context-aware responses.",
                    },
                    {
                        title: "⚡ Fast & Lightweight",
                        img: "https://images.unsplash.com/photo-1662572995316-4e96fbeed069?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        desc: "Built for speed. The sidebar loads instantly and doesn’t interrupt your workflow.",
                    },
                    {
                        title: "🌐 Works Everywhere",
                        img: "https://images.unsplash.com/photo-1475154404624-07909433bbfb?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        desc: "Use it on news sites, PDFs, blog posts, research papers, and even email.",
                    },
                ].map((feature, i) => (
                    <div
                        key={i}
                        className="p-6 border border-gray-700 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    >
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-full h-40 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                        <p className="text-gray-300">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}