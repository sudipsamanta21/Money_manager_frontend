import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Input from "../components/Input.jsx";
import { validateEmail } from "../util/validation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import ProfilePhotoSelector from "../components/profilePhotoSet.jsx";
import uploadProfileImage from "../util/uploadProfileImage.js";

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let profileImageUrl = "";
        setIsLoading(true);

        if (!fullName.trim()) {
            setError("Please enter your full name");
            setIsLoading(false);
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address!");
            setIsLoading(false);
            return;
        }

        if (!password.trim()) {
            setError("Please enter a valid password");
            setIsLoading(false);
            return;
        }

        setError("");

        try {
            if (profilePhoto) {
                const imageUrl = await uploadProfileImage(profilePhoto);
                profileImageUrl = imageUrl || "";
            }

            const response = await axiosConfig.post(API_ENDPOINTS.REGISTER, {
                fullName,
                email,
                password,
                profileImageUrl,
            });

            if (response.status === 201) {
                toast.success("Profile created successfully.");
                navigate("/login");
            }
        } catch (err) {
            console.error("Something went wrong", err);
            setError(err.response?.data?.message || err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden p-4">

            {/* Background */}
            <img
                src={assets.login_bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover blur-sm"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Signup Card */}
            <div className="relative z-10 w-full max-w-sm">

                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5">

                    {/* Logo */}
                    <div className="flex flex-col items-center mb-5">
                        <img
                            src={assets.logo}
                            alt="Money Manager"
                            className="w-16 h-16 object-contain mb-1"
                        />

                        <h2 className="text-xl font-bold text-fuchsia-800">
                            Money Manager
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Smart Expense Tracking
                        </p>
                    </div>

                    {/* Heading */}
                    <h3 className="text-lg font-semibold text-center text-gray-800">
                        Create An Account
                    </h3>

                    <p className="text-sm text-slate-600 text-center mt-1 mb-5">
                        Start tracking your spending by joining with us.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">

                        <div className="flex justify-center scale-90">
                            <ProfilePhotoSelector
                                image={profilePhoto}
                                setImage={setProfilePhoto}
                            />
                        </div>

                        <Input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            label="Full Name"
                            placeholder="Enter Full Name"
                            type="text"
                        />

                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email Address"
                            placeholder="name@example.com"
                            type="email"
                        />

                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            placeholder="********"
                            type="password"
                        />

                        {error && (
                            <p className="text-sm text-red-700 bg-red-100 rounded-lg p-2 text-center">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-fuchsia-800 hover:bg-fuchsia-900 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                                isLoading
                                    ? "opacity-60 cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            {isLoading ? (
                                <>
                                    <LoaderCircle className="w-5 h-5 animate-spin" />
                                    Signing Up...
                                </>
                            ) : (
                                "SIGN UP"
                            )}
                        </button>

                        <p className="text-center text-sm text-slate-700">
                            Already have an account?
                            <Link
                                to="/login"
                                className="ml-1 text-fuchsia-800 font-semibold hover:underline"
                            >
                                Login
                            </Link>
                        </p>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Signup;