import hero from "@assets/images/hero.png";
import Button from "@components/UI/Button";
import avatar1 from "@assets/images/testimonials-avatars/1.png";
import aavatar2 from "@assets/images/testimonials-avatars/2.png";
import aavatar3 from "@assets/images/testimonials-avatars/3.png";

function HeroSection() {
    return (
        <section className="hero-section" id="heroSection">
            <div className="container grid lg:grid-cols-2 gap-5">
                <div className="hero-wrapper">
                    <img src={hero} alt="Hero" className="w-full object-cover rounded-b-2xl" />
                </div>
                <div className="content-wrapper flex flex-col justify-center gap-5 lg:py-5">
                    <div className="w-fit pb-2 border-b border-b-green-70 font-semibold text-lg sm:text-xl">
                        Transform Your ❤️ Health with
                    </div>
                    <div className="text-wrapper">
                        <h1 className="font-bold text-dark-green-15 text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2">Personalized Nutrition Coaching</h1>
                        <p className="font-medium">
                            Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching.
                            Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support.
                            Start your transformation today and experience the power of personalized nutrition coaching.
                        </p>
                    </div>
                    <div className="actions flex items-center gap-3 max-lg:justify-center">
                        <Button
                            to={'/'}
                            className="max-lg:flex-1 text-nowrap text-center"
                        >
                            Get Starter Today
                        </Button>
                        <Button
                            to={'/'}
                            variant="secondary"
                            className="max-lg:flex-1 text-nowrap text-center"
                        >
                            Book Demo
                        </Button>
                    </div>
                    <div className="happy-customers flex items-center gap-3 max-lg:-order-1 max-lg:justify-center max-lg:-mt-13 max-lg:flex-col">
                        <div className="customers rounded-full bg-green-97 p-2 border border-green-70 flex items-center">
                            <img src={avatar1} alt="Avatar 1" className="w-10 h-10 object-cover rounded-full" />
                            <img src={aavatar2} alt="Avatar 2" className="w-10 h-10 object-cover rounded-full relative z-1 -ms-3" />
                            <img src={aavatar3} alt="Avatar 3" className="w-10 h-10 object-cover rounded-full relative z-1 -ms-3" />
                        </div>
                        <div className="text-container">
                            <span className="text-dark-green-40 font-bold">430+</span>
                            {" "}
                            <span className="font-semibold text-dark-green-20">Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;