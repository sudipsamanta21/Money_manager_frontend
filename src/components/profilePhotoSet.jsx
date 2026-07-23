import { useRef, useState } from "react";
import { Trash, User, Upload, Pencil } from "lucide-react";

const ProfilePhotoSelector = ({ image, setImage }) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(file);
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = (e) => {
        e.preventDefault();

        setImage(null);
        setPreviewUrl(null);

        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const onChooseFile = (e) => {
        e.preventDefault();
        inputRef.current?.click();
    };

    return (
        <div className="flex justify-center mb-6">
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden"
            />

            {!image ? (
                <div className="w-24 h-24 flex justify-center items-center bg-purple-100 rounded-full relative">
                    <User
                        className="text-purple-500"
                        size={40}
                    />

                    <button
                        onClick={onChooseFile}
                        className="w-9 h-9 flex justify-center items-center bg-purple-600 hover:bg-purple-700 rounded-full text-white absolute -bottom-1 -right-1 transition"
                    >
                        <Upload size={16} />
                    </button>
                </div>
            ) : (
                <div className="relative">
                    <img
                        src={previewUrl}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-2 border-purple-300"
                    />

                    {/* Edit Button */}
                    <button
                        onClick={onChooseFile}
                        className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow transition"
                        title="Edit Photo"
                    >
                        <Pencil size={15} />
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={handleRemoveImage}
                        className="absolute -bottom-1 -right-1 w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full shadow transition"
                        title="Remove Photo"
                    >
                        <Trash size={15} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePhotoSelector;