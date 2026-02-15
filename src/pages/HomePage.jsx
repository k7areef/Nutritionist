import Blogs from "@components/Sections/Blogs";
import Features from "@components/Sections/Features";
import HeroSection from "@components/Sections/HeroSection";
import Pricing from "@components/Sections/Pricing";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home");
    return (
        <div className="home-page">
            <main>
                <HeroSection />
                <Features />
                <Blogs />
                <Testimonials />
                <Pricing />
            </main>
        </div>
    )
}

export default HomePage;