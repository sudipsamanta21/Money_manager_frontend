import {API_ENDPOINTS} from "./apiEndpoints.js";

const  CLOUDINARY_UPLOAD_PRESET = "money_manager";

const uploadProfileImage = async (image) => {
    const fromData = new FormData();
    fromData.append("file", image);
    fromData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try{
        const response= await fetch(API_ENDPOINTS.UPLOAD_IMAGE,{
            method: "POST",
            body: fromData
        });
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`Cloudinary upload failed: ${errorData.error.message || response.statusText}`);
        }

        const data = await response.json();
        console.log('Image uploaded successfully.', data);
        return data.secure_url;
    }catch (error) {
        console.log("Error uploading image upload failed:", error);
        throw error;
    }
}

export default uploadProfileImage;