import Home from "./components/Home";
const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8 px-4 ">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-gray-800 mb-2">
                    AI Image Enhancer{" "}
                </h1>
                <p className="text-lg mt-4 text-gray-500">
                    Upload an image to enhance its quality using advanced AI. <br />Drag & drop or click to select your image.
                </p>
            </div>

            <Home />

           
        </div>
    );
};

export default App;
