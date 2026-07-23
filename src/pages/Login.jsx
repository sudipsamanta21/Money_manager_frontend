import { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import Input from "../components/Input.jsx";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../util/validation.js";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import { AppContext } from "../context/AppContext.jsx";
import { LoaderCircle } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { setUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!validateEmail(email)) {
            setError("Please enter a valid email address!");
            setIsLoading(false);
            return;
        }

        if (!password.trim()) {
            setError("Please enter a valid password!");
            setIsLoading(false);
            return;
        }

        setError("");

        try {
            const response = await axiosConfig.post(API_ENDPOINTS.LOGIN, {
                email,
                password,
            });

            const { token, user } = response.data;

            if (token) {
                localStorage.setItem("token", token);
                setUser(user);
                navigate("/dashboard");
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                console.error("Something went wrong!", error);
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <img
                src={assets.login_bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover blur-sm"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md px-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">

                    {/* Logo */}
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src={assets.logo}
                            alt="Money Manager"
                            className="w-20 h-20 rounded-full shadow-lg border-4 border-fuchsia-100 object-contain bg-white p-2"
                        />

                        <h2 className="mt-3 text-2xl font-bold text-fuchsia-800">
                            Money Manager
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Track your income & expenses effortlessly
                        </p>
                    </div>

                    {/* Welcome Text */}
                    <h3 className="text-2xl font-semibold text-center text-gray-800">
                        Welcome Back
                    </h3>

                    <p className="text-sm text-gray-500 text-center mt-2 mb-8">
                        Please sign in to continue
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email Address"
                            placeholder="name@example.com"
                            type="text"
                        />

                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            placeholder="********"
                            type="password"
                        />

                        {error && (
                            <p className="text-sm text-red-600 bg-red-100 border border-red-200 rounded-lg p-3 text-center">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 rounded-lg bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                                isLoading
                                    ? "opacity-70 cursor-not-allowed"
                                    : "hover:scale-[1.02]"
                            }`}
                        >
                            {isLoading ? (
                                <>
                                    <LoaderCircle className="w-5 h-5 animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                "LOGIN"
                            )}
                        </button>

                        <p className="text-center text-sm text-slate-600">
                            Don't have an account?
                            <Link
                                to="/signup"
                                className="ml-1 font-semibold text-fuchsia-800 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;