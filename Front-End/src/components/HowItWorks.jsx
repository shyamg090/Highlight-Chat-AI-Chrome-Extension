import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
            alt: "Install Extension",
            step: "1",
            desc: (
                <>
                    Install the <strong className="text-blue-500">Highlight Chat AI</strong> Chrome extension from the store.
                </>
            ),
        },
        {
            img: "https://d29fhpw069ctt2.cloudfront.net/icon/image/84763/preview.svg",
            alt: "Highlight Text",
            step: "2",
            desc: "Select any text on the page — a paragraph, a sentence, or a quote.",
        },
        {
            img: "https://static.vecteezy.com/system/resources/previews/041/759/919/non_2x/ai-generated-ai-processor-chip-black-line-icon-technology-and-artificial-intelligence-outline-concept-illustration-on-white-background-vector.jpg",
            alt: "Ask AI",
            step: "3",
            desc: "The sidebar opens up. Ask AI questions, get summaries, translations, or explanations.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-24 px-6 text-gray-200">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 text-white drop-shadow-lg"
            >
                How It Works
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {steps.map(({ img, alt, step, desc }, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center space-y-5 px-4"
                    >
                        <div className="w-28 h-28 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                            <img
                                src={img}
                                alt={alt}
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <div className="text-blue-500 text-3xl font-bold">Step {step}</div>
                        <p className="text-gray-300 text-sm max-w-xs">{desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
