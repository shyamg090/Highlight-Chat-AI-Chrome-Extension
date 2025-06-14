import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TryPdf() {
    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-center text-gray-200 overflow-hidden">
            {/* Top background glow */}
            <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] z-0" />

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg relative z-10"
            >
                Ask Anything Any Anywhere ✨
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300 relative z-10"
            >
                Students, researchers, lawyers — now you can talk to your documents. Just upload and chat with AI.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.2}
                    glareColor="#00BFFF"
                    glarePosition="all"
                    className="max-w-4xl mx-auto mb-12 rounded-xl shadow-blue-700/30"
                >
                    <img
                        src="https://image.lexica.art/full_jpg/76e3ea1f-b545-4e52-810f-c74e5da6669c"
                        alt="PDF Chat"
                        className="rounded-xl w-full h-auto shadow-2xl"
                    />
                </Tilt>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <Link
                    to="/pdf-chat"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 text-lg font-semibold shadow-lg transition-all duration-300"
                >
                    Go to PDF Chat →
                </Link>
            </motion.div>
        </section>
    );
}
