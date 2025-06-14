import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            title: "📄 Page-by-Page PDF Analysis",
            img: "https://image.lexica.art/full_webp/85ed31b3-5342-4adc-87b9-67142e166fa0",
            desc: "Upload any PDF and get instant AI-powered summaries, insights, and question support — page by page.",
        },
        {
            title: "⚖️ Understand Legal Documents",
            img: "https://image.lexica.art/full_webp/0d9005bd-cb93-450a-940c-eb03fa65faaf",
            desc: "Make sense of contracts, agreements, and policy documents with crystal-clear AI explanations.",
        },
        {
            title: "🧠 Research Paper Breakdown",
            img: "https://image.lexica.art/full_webp/3ee9ddfc-0a8d-4a7a-9b86-b5a181816a3f",
            desc: "Extract complex academic information and convert it into digestible summaries in seconds.",
        },
        {
            title: "🌐 Works on Any Webpage",
            img: "https://image.lexica.art/full_jpg/d7e44537-9668-4cf8-9ea4-ec76c2150dbf",
            desc: "From blogs to technical documentation, get real-time context-aware insights wherever you browse.",
        },
        {
            title: "⚡ Lightning-Fast & Lightweight",
            img: "https://image.lexica.art/full_jpg/5c5a6da8-c9d5-4d5d-89cc-6f900bc99826",
            desc: "The extension is snappy and efficient — no lag, no distractions, just seamless analysis.",
        },
        {
            title: "🔐 Privacy-First Design",
            img: "https://image.lexica.art/full_webp/513a63c7-5406-4d1b-a2b4-4543ca7f7c27",
            desc: "All processing is secure. Your data stays yours — no unauthorized logging or tracking.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200 px-6 pt-10 pb-24">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 text-white drop-shadow-lg"
            >
                Features You'll Love 💙
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 border border-gray-700 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    >
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-full h-40 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                        <p className="text-gray-300">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
