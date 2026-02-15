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
            </main>
        </div>
    )
}

export default AboutPage;