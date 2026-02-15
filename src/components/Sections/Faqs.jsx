import SectionHeader from "./common/SectionHeader";
import data from "@data/testimonials.json";

function Faqs() {

    const { title, description } = data;

    return (
        <section className="faqs-section" id="faqs">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Faqs;