import SectionHeader from "./common/SectionHeader";
import data from "@data/workSteps.json";
import icon1 from "@assets/icons/work-steps/1.svg";
import icon2 from "@assets/icons/work-steps/2.svg";
import icon3 from "@assets/icons/work-steps/3.svg";
import icon4 from "@assets/icons/work-steps/4.svg";
import icon5 from "@assets/icons/work-steps/5.svg";
import icon6 from "@assets/icons/work-steps/6.svg";
import icon7 from "@assets/icons/work-steps/7.svg";
import icon8 from "@assets/icons/work-steps/8.svg";
import icon9 from "@assets/icons/work-steps/9.svg";
import icon10 from "@assets/icons/work-steps/10.svg";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4,
    5: icon5,
    6: icon6,
    7: icon7,
    8: icon8,
    9: icon9,
    10: icon10
}

function HowItWork() {

    const { title, description, steps } = data;

    return (
        <section className="how-it-work-section py-5 md:py-10" id="howItWork">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid md:grid-cols-2 gap-x-5 gap-y-15">
                    {
                        steps.map((step, index) => (<div className="step-card bg-green-95 border border-green-90 rounded-lg p-5 relative z-1" key={step.id || index}>
                            <div className="floating-step-num absolute left-0 -top-10 -z-1 font-bold text-dark-green-40 text-2xl md:text-3xl xl:text-6xl pointer-events-none">
                                {String(step.id).padStart(2, '0')}
                            </div>
                            <div className="card-header flex items-center gap-3 mb-3">
                                <div className="icon-container w-14 h-14 flex items-center justify-center rounded-md bg-green-70">
                                    <img src={iconsMaper[step.id]} alt={step.title} width={30} />
                                </div>
                                <h3 className="font-semibold text-lg sm:text-xl">{step.title}</h3>
                            </div>
                            <p>{step.description}</p>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWork;