import {
    Mail,
    Globe,
    GraduationCap,
    Code2,
    User,
} from "lucide-react";

import profileImage from "../assets/profile.jpg";
import Dashboard from "../components/Dashboard.jsx";
import {UserHooks} from "../hooks/UserHooks.jsx";

const Developer = () => {
    UserHooks();
    const skills = [
        "Java",
        "Spring Boot",
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "PostgreSQL",
        "MySQL",
        "C",
        "Hibernate",
        "Spring Security",
        "JWT",
        "REST API",
        "Git",
        "GitHub",
    ];

    return (
        <Dashboard activeMenu="Developer">
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <div className="max-w-6xl mx-auto">

                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-lg p-10">

                    <div className="flex flex-col lg:flex-row items-center gap-10">

                        {/* Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={profileImage}
                                alt="Sudip Samanta"
                                className="w-56 h-56 rounded-full object-cover border-4 border-purple-600 shadow-xl"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex-1">

                            <h1 className="text-4xl font-bold text-gray-800">
                                Sudip Samanta
                            </h1>

                            <p className="text-xl text-purple-600 font-semibold mt-2">
                                Full Stack Java Developer
                            </p>

                            <p className="mt-5 text-gray-600 leading-8">
                                Passionate Full Stack Java Developer with
                                experience building secure and scalable web
                                applications using Java, Spring Boot, React,
                                PostgreSQL, Hibernate and modern web
                                technologies. I enjoy solving real-world
                                problems through clean code and intuitive user
                                interfaces.
                            </p>

                            {/* Social */}
                            <div className="flex gap-4 mt-8">


                                <a
                                    href="sudipsamanta0010@gmail.com"
                                    className="bg-red-500 text-white p-3 rounded-full hover:scale-110 transition"
                                >
                                    <Mail />
                                </a>

                                <a
                                    href="https://yourportfolio.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-purple-600 text-white p-3 rounded-full hover:scale-110 transition"
                                >
                                    <Globe />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mt-10">

                    {/* Education */}
                    <div className="bg-white rounded-xl shadow-md p-8">

                        <div className="flex items-center gap-3 mb-5">
                            <GraduationCap
                                className="text-purple-600"
                                size={30}
                            />

                            <h2 className="text-2xl font-bold">
                                Education
                            </h2>
                        </div>

                        <p className="text-lg font-semibold">
                            Bachelor of Technology
                        </p>

                        <p className="text-gray-600 mt-2">
                            Computer Science & Engineering
                        </p>

                        <p className="text-gray-500 mt-2">
                            JIS University
                        </p>

                    </div>

                    {/* Skills */}
                    <div className="bg-white rounded-xl shadow-md p-8">

                        <div className="flex items-center gap-3 mb-5">
                            <Code2
                                className="text-purple-600"
                                size={30}
                            />

                            <h2 className="text-2xl font-bold">
                                Technical Skills
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-3">

                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium"
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Contact */}
                <div className="bg-white rounded-xl shadow-md p-8 mt-10">

                    <div className="flex items-center gap-3 mb-6">
                        <User
                            className="text-purple-600"
                            size={30}
                        />

                        <h2 className="text-2xl font-bold">
                            Contact Information
                        </h2>
                    </div>

                    <div className="space-y-5 text-lg">

                        <div className="flex items-center gap-3">
                            <Mail className="text-purple-600" />
                            sudipsamanat0010@gmail.com
                        </div>

                        <div className="flex items-center gap-3">
                            <Globe className="text-purple-600" />
                            www.yourportfolio.com
                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="text-center mt-12 text-gray-600">
                    <p>
                        © 2026 Money Manager | Developed with ❤️ by
                        <span className="font-semibold text-purple-600">
                            {" "}Sudip Samanta
                        </span>
                    </p>
                </div>

            </div>
        </div>

        </Dashboard>
    );
};

export default Developer;