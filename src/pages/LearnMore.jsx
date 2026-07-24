import { Link } from "react-router-dom";
import {
    Wallet,
    PieChart,
    ShieldCheck,
    Smartphone,
    ArrowLeft,
    CheckCircle2,
} from "lucide-react";

const LearnMore = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h1 className="text-5xl font-bold text-gray-900">
                        Learn More
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                        Manage your income, expenses, budgets, and financial goals with
                        our secure and modern Money Management System.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <Wallet className="w-14 h-14 text-purple-600 mx-auto mb-4" />
                        <h2 className="font-bold text-xl mb-2">Income & Expenses</h2>
                        <p className="text-gray-600">
                            Easily record your daily income and expenses with categories.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <PieChart className="w-14 h-14 text-blue-600 mx-auto mb-4" />
                        <h2 className="font-bold text-xl mb-2">Analytics</h2>
                        <p className="text-gray-600">
                            Beautiful charts help you understand where your money goes.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <ShieldCheck className="w-14 h-14 text-green-600 mx-auto mb-4" />
                        <h2 className="font-bold text-xl mb-2">Secure</h2>
                        <p className="text-gray-600">
                            Your financial data is protected with secure authentication.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <Smartphone className="w-14 h-14 text-orange-500 mx-auto mb-4" />
                        <h2 className="font-bold text-xl mb-2">Responsive</h2>
                        <p className="text-gray-600">
                            Works perfectly on desktop, tablet, and mobile devices.
                        </p>
                    </div>

                </div>

                {/* Why Choose */}
                <div className="bg-white rounded-2xl shadow-lg mt-16 p-10">

                    <h2 className="text-3xl font-bold text-center mb-8">
                        Why Choose Our System?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1" />
                            <span>Easy-to-use dashboard with modern UI.</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1" />
                            <span>Track income and expenses instantly.</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1" />
                            <span>Visual reports using charts.</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1" />
                            <span>Fast, secure, and responsive application.</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1" />
                            <span>Category management for better organization.</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1" />
                            <span>Future support for budgeting and AI insights.</span>
                        </div>

                    </div>
                </div>

                {/* Technologies */}
                <div className="mt-16 bg-purple-700 rounded-2xl text-white p-10 text-center">

                    <h2 className="text-3xl font-bold mb-4">
                        Built Using Modern Technologies
                    </h2>

                    <p className="text-lg opacity-90">
                        React • Tailwind CSS • Spring Boot • PostgreSQL • JWT • Cloudinary
                    </p>

                </div>

                {/* Back Button */}
                <div className="text-center mt-14">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl transition"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default LearnMore;