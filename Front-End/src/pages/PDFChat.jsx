import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import { getDocument } from 'pdfjs-dist';

// Setup PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

const PDFChat = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedText, setSelectedText] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setPageNumber(1);
            setSelectedText('');
        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    const goToPrevPage = () =>
        setPageNumber((prev) => (prev - 1 <= 1 ? 1 : prev - 1));

    const goToNextPage = () =>
        setPageNumber((prev) => (prev + 1 >= numPages ? numPages : prev + 1));

    // 👇 Extract clean text using PDF.js
    const extractTextFromPage = async (file, pageNumber) => {
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await getDocument({ data: arrayBuffer }).promise;
            const page = await pdf.getPage(pageNumber);
            const content = await page.getTextContent();
            const strings = content.items.map((item) => item.str);
            return strings.join(' ').replace(/\s+/g, ' ').trim();
        } catch (error) {
            console.error('Text extraction failed:', error);
            return 'Failed to extract text.';
        }
    };

    const analyzeTextFromPDF = async () => {
        setIsAnalyzing(true);
        setSelectedText('');
        setTimeout(async () => {
            const extracted = await extractTextFromPage(file, pageNumber);
            setSelectedText(extracted);
            setIsAnalyzing(false);
        }, 2000); // 2s animation
    };

    return (
        <div className="min-h-[100dvh] bg-gray-900 p-4 flex text-white gap-4">
            {/* Left Side: PDF Viewer */}
            <div className="w-[70%] bg-gray-800 rounded-xl p-4 shadow-lg relative">
                <h1 className="text-2xl font-bold mb-4 text-center">Talk to Your PDF</h1>

                <div className="mb-4 text-center">
                    <input
                        id="pdf-upload"
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="mx-auto block w-full max-w-sm border border-gray-700 rounded-lg px-3 py-2 text-sm
              text-gray-200 bg-gray-900 shadow-sm
              file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
              file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition"
                    />
                </div>

                {file && (
                    <>
                        {/* Controls */}
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={goToPrevPage}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                                disabled={pageNumber === 1}
                            >
                                Prev
                            </button>

                            <button
                                onClick={analyzeTextFromPDF}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                            >
                                Analyze This Page
                            </button>

                            <button
                                onClick={goToNextPage}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                                disabled={pageNumber === numPages}
                            >
                                Next
                            </button>
                        </div>

                        {/* PDF Viewer */}
                        <div className="relative">
                            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page
                                    pageNumber={pageNumber}
                                    width={900}
                                    renderTextLayer={true}
                                    renderAnnotationLayer={false}
                                    className="mx-auto relative z-10"
                                />
                            </Document>

                            {/* Animation Overlay */}
                            {isAnalyzing && (
                                <div className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center rounded-lg">
                                    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* Right Side: Text Output */}
            <div className="w-[30%] bg-gray-800 rounded-xl p-4 shadow-lg h-[90vh] overflow-y-auto sticky top-2">
                <h2 className="text-xl font-semibold mb-4">Selected Text</h2>
                {selectedText ? (
                    <pre className="whitespace-pre-wrap text-gray-200 text-sm">{selectedText}</pre>
                ) : (
                    <p className="text-gray-400 text-sm">Click "Analyze This Page" to extract clean text.</p>
                )}
            </div>
        </div>
    );
};

export default PDFChat;
