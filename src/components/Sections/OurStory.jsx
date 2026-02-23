import SectionHeader from "./common/SectionHeader";
import data from "@data/ourStory.json"
import image1 from "@assets/images/our-story/1.png";
import image2 from "@assets/images/our-story/2.png";
import image3 from "@assets/images/our-story/3.png";
import image4 from "@assets/images/our-story/4.png";
import image5 from "@assets/images/our-story/5.png";
import image6 from "@assets/images/our-story/6.png";
import image7 from "@assets/images/our-story/7.png";
import image8 from "@assets/images/our-story/8.png";
import image9 from "@assets/images/our-story/9.png";
import image10 from "@assets/images/our-story/10.png";

const imagesMaper = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8,
    9: image9,
    10: image10
}

function OurStory() {

    const { title, description, storeis } = data;

    return (
        <section className="our-story-section py-5 md:py-10" id="ourStory">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="content-wrapper rounded-xl overflow-hidden border border-green-90">
                    {
                        storeis.map((story, index) => (<div className="story-card flex md:items-center max-md:flex-col group" key={index}>
                            <div className="story-image w-full md:w-[calc(100%+60px)] md:group-even:order-1 md:group-even:border-s-16 md:group-even:border-s-green-70 md:group-odd:border-e-16 md:group-odd:border-e-green-70 max-md:border-b-10 max-md:border-b-green-70">
                                <img src={imagesMaper[story.id]} alt={story.title} />
                            </div>
                            <div className="story-content w-full p-5 bg-green-95 space-y-5">
                                <h3 className="font-semibold text-lg sm:text-xl pb-2 border-b-2 border-b-green-70 w-fit">{story.title}</h3>
                                <p className="font-medium">{story.description}</p>
                                <span className="font-semibold">{story.date}</span>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurStory;