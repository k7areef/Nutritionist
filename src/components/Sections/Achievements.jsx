import SectionHeader from "./common/SectionHeader";
import data from "@data/achievements.json";
import icon1 from "@assets/icons/achievements/1.svg";
import icon2 from "@assets/icons/achievements/2.svg";
import icon3 from "@assets/icons/achievements/3.svg";
import icon4 from "@assets/icons/achievements/4.svg";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4
}

function Achievements() {

    const { title, description, achievements } = data;

    return (
        <section className="achievements-section py-5 md:py-10" id="achievements">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        achievements.map((achievement, index) => (<div className="achievement-card p-5 rounded-lg bg-green-95 border border-green-85" key={index}>
                            <div className="card-header flex items-center gap-3 mb-3">
                                <div className="icon-container w-14 h-14 flex items-center justify-center rounded-md bg-green-70">
                                    <img src={iconsMaper[achievement.id]} alt={achievement.title} width={30} />
                                </div>
                                <h3 className="font-semibold text-lg sm:text-xl">{achievement.title}</h3>
                            </div>
                            <p>{achievement.description}</p>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Achievements;