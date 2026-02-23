import Achievements from "@components/Sections/Achievements";
import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import OurStory from "@components/Sections/OurStory";
import useChangeTitle from "@hooks/useChangeTitle";

function AboutPage() {
    useChangeTitle("About");
    return (
        <div className="about-page">
            <main>
                <HeaderInformation page="about" />
                <OurStory />
                <Achievements />
                <CTA page="about" />
            </main>
        </div>
    )
}

export default AboutPage;