export default function HowItWorks() {
    return (
        <section className="bg-gray-900 py-20 px-6 text-gray-200">
            <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow">
                How It Works
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                {[
                    {
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
                        alt: "Install Extension",
                        step: "1",
                        desc: (
                            <>
                                Install the <strong className="text-blue-600">Highlight Chat AI</strong> Chrome extension from the store.
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
                ].map(({ img, alt, step, desc }, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-4">
                        <img src={img} alt={alt} className="w-32 h-32 object-cover rounded-full" />
                        <div className="text-blue-600 text-4xl font-bold">{step}</div>
                        <p className="max-w-xs">{desc}</p>
                    </div>
                ))}
            </div>
        </section>

    );
}