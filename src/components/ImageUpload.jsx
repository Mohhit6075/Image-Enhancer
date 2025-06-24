
import { useState } from "react";

const ImageUpload = (props) => {
    const [dragActive, setDragActive] = useState(false);

    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            props.UploadImageHandler(e.dataTransfer.files[0]);
        }
    };

    return (
        <div
            className={`bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl transition-all ${
                dragActive ? "border-2 border-blue-400 bg-blue-50" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <span className="text-lg font-medium text-gray-600 select-none">
                    {dragActive
                        ? "Drop your image here"
                        : "Click or drag & drop to upload your image"}
                </span>
            </label>
        </div>
    );
};

export default ImageUpload;