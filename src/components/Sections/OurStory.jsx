import SectionHeader from "./common/SectionHeader";
import data from "@data/ourStory.json"

function OurStory() {

    const { title, description } = data;

    return (
        <section className="our-story-section py-5 md:py-10" id="ourStory">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default OurStory;