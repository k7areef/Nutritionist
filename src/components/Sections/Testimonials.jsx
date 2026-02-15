import SectionHeader from "./common/SectionHeader";
import data from "@data/testimonials.json";

function Testimonials() {

    const { title, description } = data;

    return (
        <section className="testimonials-section py-5 md:py-10" id="testimonials">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Testimonials;