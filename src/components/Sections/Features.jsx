import SectionHeader from "./common/SectionHeader";
import data from "@data/features.json";
import feature1 from "@assets/icons/features/1.svg";
import feature2 from "@assets/icons/features/2.svg";
import feature3 from "@assets/icons/features/3.svg";
import feature4 from "@assets/icons/features/4.svg";
import feature5 from "@assets/icons/features/5.svg";
import feature6 from "@assets/icons/features/6.svg";

const iconsMaper = {
    1: feature1,
    2: feature2,
    3: feature3,
    4: feature4,
    5: feature5,
    6: feature6
}

function Features() {

    const { title, description, features } = data;

    return (
        <section className="features-section py-5 md:py-10" id="features">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        features.map((feature, index) => (<div className="feature-card p-5 rounded-lg bg-green-95 border border-green-85" key={index}>
                            <div className="card-header flex items-center gap-3 mb-3">
                                <div className="icon-container w-14 h-14 flex items-center justify-center rounded-md bg-green-70">
                                    <img src={iconsMaper[feature.id]} alt={feature.title} width={30} />
                                </div>
                                <h3 className="font-semibold text-lg sm:text-xl">{feature.title}</h3>
                            </div>
                            <p>{feature.description}</p>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features;