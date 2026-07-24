import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LearnMore from "./LearnMore.jsx";

const HomeLanding=() => {
    return (
        <div className="font-sans bg-white min-h-screen">
            <Navbar />
            <Hero />
            <DashboardPreview />
            <Features />
            <Stats />
            <FAQ />
            <Contact />
            <Footer />
            <LearnMore/>
        </div>
    );
}
export default HomeLanding;
