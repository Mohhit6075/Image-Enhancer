
import Loading from "./Loading";

const ImagePreview = (props) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = props.enhanced;
        link.download = "enhanced-image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col items-center w-full min-h-screen py-12 px-2">
            
            <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
                {/* Original Image Card */}
                <div className="flex-1 bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-bold text-blue-500 mb-4 tracking-wide">
                        Original
                    </h2>
                    <div className="w-full h-80 flex items-center justify-center bg-gray-100 rounded-xl border border-gray-200 overflow-hidden">
                        {props.uploaded ? (
                            <img
                                src={props.uploaded}
                                alt="Original"
                                className="object-contain w-full h-full"
                            />
                        ) : (
                            <span className="text-gray-400 text-lg">No Image Selected</span>
                        )}
                    </div>
                </div>

                {/* Enhanced Image Card */}
                <div className="flex-1 bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                    <h2 className="text-2xl font-bold text-green-500 mb-4 tracking-wide">
                        Enhanced
                    </h2>
                    <div className="w-full h-80 flex items-center justify-center bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative">
                        {props.loading ? (
                            <Loading />
                        ) : props.enhanced ? (
                            <img
                                src={props.enhanced}
                                alt="Enhanced"
                                className="object-contain w-full h-full"
                            />
                        ) : (
                            <span className="text-gray-400 text-lg">No Enhanced Image</span>
                        )}
                    </div>
                    {props.enhanced && !props.loading && (
                        <button
                            onClick={handleDownload}
                            className="mt-6 px-8 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200"
                        >
                            Download Enhanced Image
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;
