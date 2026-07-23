import {
    Wallet,
    Target,
    ShieldCheck,
    BarChart3,
    CheckCircle,
} from "lucide-react";
import {LoaderCircle} from "lucide-react";
import {UserHooks} from "../hooks/UserHooks.jsx";
import Dashboard from "../components/Dashboard.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const About = () => {
    UserHooks();

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleGetStarted = () => {
        setLoading(true);

        setTimeout(() => {
            navigate("/dashboard");
        }, 1000); // 1 second loading
    };

    return (
        <Dashboard activeMenu="About">
        <div className="min-h-screen bg-white py-10 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-4">
                        <Wallet className="text-purple-600" size={40} />
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800">
                        About Money Manager
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
                        Money Manager is a simple and secure personal finance application
                        designed to help you manage your income, expenses, and financial
                        goals efficiently.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <BarChart3 className="text-purple-600" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            Financial Overview
                        </h3>

                        <p className="text-gray-600">
                            Track your total balance, income, expenses and view
                            insightful charts for better financial decisions.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <Target className="text-green-600" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            Expense Tracking
                        </h3>

                        <p className="text-gray-600">
                            Organize your transactions into categories and keep
                            track of where your money goes every day.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <ShieldCheck className="text-blue-600" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            Secure & Reliable
                        </h3>

                        <p className="text-gray-600">
                            Your account is protected using secure authentication
                            and encrypted passwords for a safe experience.
                        </p>
                    </div>

                </div>

                {/* Why Choose */}
                <div className="mt-16 bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Why Choose Money Manager?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {[
                            "Easy to use interface",
                            "Track Income & Expenses",
                            "Category Management",
                            "Beautiful Dashboard",
                            "Financial Analytics",
                            "Secure User Authentication",
                            "Responsive Design",
                            "Fast & Reliable Performance",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle
                                    className="text-green-500"
                                    size={22}
                                />

                                <span className="text-gray-700 text-lg">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Manage Your Money Smarter
                    </h2>

                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Whether you're tracking daily expenses or planning your
                        monthly budget, Money Manager provides the tools you need
                        to stay in control of your finances.
                    </p>

                    <button
                        onClick={handleGetStarted}
                        disabled={loading}
                        className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition cursor-pointer">
                        {loading ? (
                            <>
                                <LoaderCircle className="animate-spin" size={20} />
                                Loading...
                            </>
                        ) : (
                            "Get Started"
                        )}
                    </button>
                </div>

            </div>
        </div>
        </Dashboard>
    );
};

export default About;