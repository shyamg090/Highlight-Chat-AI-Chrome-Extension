import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';

// Setup PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

const PDFChat = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber((prev) => (prev - 1 <= 1 ? 1 : prev - 1));

    const goToNextPage = () =>
        setPageNumber((prev) => (prev + 1 >= numPages ? numPages : prev + 1));

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setPageNumber(1);
        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    return (

        <div className="min-h-[100dvh] bg-gray-900 p-6 flex justify-center items-start">
            <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-white">
                    Talk to Your PDF
                </h1>

                <div className="mb-8 text-center">
                    <label
                        htmlFor="pdf-upload"
                        className="block mb-2 text-sm font-medium text-gray-300"
                    >
                        Upload your PDF file
                    </label>
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
                        {/* Top navigation buttons */}
                        <div className="flex justify-between items-center mb-6">
                            <button
                                onClick={goToPrevPage}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md disabled:opacity-50 transition"
                                disabled={pageNumber === 1}
                            >
                                Prev
                            </button>

                            <p className="text-gray-300 font-semibold">
                                Page {pageNumber} of {numPages}
                            </p>

                            <button
                                onClick={goToNextPage}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md disabled:opacity-50 transition"
                                disabled={pageNumber === numPages}
                            >
                                Next
                            </button>
                        </div>

                        {/* PDF Display */}
                        <div className="border border-gray-700 rounded-lg shadow-lg bg-gray-900">
                            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page
                                    pageNumber={pageNumber}
                                    width={800}    // sets the width of the PDF page
                                    renderTextLayer={true}
                                    renderAnnotationLayer={false}
                                    className="mx-auto"
                                />
                            </Document>
                        </div>

                        {/* Bottom navigation buttons */}
                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={goToPrevPage}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md disabled:opacity-50 transition"
                                disabled={pageNumber === 1}
                            >
                                Prev
                            </button>

                            <p className="text-gray-300 font-semibold">
                                Page {pageNumber} of {numPages}
                            </p>

                            <button
                                onClick={goToNextPage}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md disabled:opacity-50 transition"
                                disabled={pageNumber === numPages}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
};

export default PDFChat;
