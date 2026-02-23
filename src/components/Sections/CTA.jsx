import Button from "@components/UI/Button";
import abstractLeft from "@assets/images/cta/abstract-left.svg";
import abstractRight from "@assets/images/cta/abstract-right.svg";

function CTA() {
    return (
        <section className="cta-section py-5 md:py-10" id="cta">
            <div className="container">
                <div className="content-wrapper bg-green-95 border border-green-85 rounded-lg relative p-5 sm:p-10 md:p-15 flex md:items-center max-md:flex-col gap-5 overflow-hidden">
                    <img src={abstractLeft} alt="Abstract Left" className="absolute -left-20 md:-left-10 -top-5 md:top-0" />
                    <div className="text-wrapper w-full relative z-1">
                        <h2 className="font-semibold mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">We Are Proud of Our Achievements</h2>
                        <p>But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being.</p>
                    </div>
                    <Button
                        to={'/'}
                        className="text-nowrap text-center shrink-0 block relative z-1"
                    >
                        Book a Demo
                    </Button>
                    <img src={abstractRight} alt="Abstract Right" className="absolute -right-5 bottom-0" />
                </div>
            </div>
        </section>
    )
}

export default CTA;