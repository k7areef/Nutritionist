import SectionHeader from "./common/SectionHeader";
import data from "@data/features.json";

function Features() {

    const { title, description } = data;

    return (
        <section className="features-section py-5 md:py-10" id="features">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Features;