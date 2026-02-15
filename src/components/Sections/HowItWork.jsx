import SectionHeader from "./common/SectionHeader";
import data from "@data/howItWork.json";

function HowItWork() {

    const { title, description } = data;

    return (
        <section className="how-it-work-section py-5 md:py-10" id="howItWork">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default HowItWork;