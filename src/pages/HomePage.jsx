import OurBlogs from "@components/Sections/OurBlogs";
import Features from "@components/Sections/Features";
import HeroSection from "@components/Sections/HeroSection";
import OurPricing from "@components/Sections/OurPricing";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home");
    return (
        <div className="home-page">
            <main>
                <HeroSection />
                <Features />
                <OurBlogs />
                <Testimonials />
                <OurPricing />
            </main>
        </div>
    )
}

export default HomePage;