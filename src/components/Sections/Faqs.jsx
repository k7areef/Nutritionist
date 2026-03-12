import React from "react";
import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/faqs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Hero from "@assets/images/faq-hero.png";

function Faqs() {

    const { title, description, faqs } = data;

    const [faqOpen, setFaqOpen] = React.useState(null);

    return (
        <section className="faqs-section py-5 md:py-10" id="faqs">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="faqs-content flex md:items-start gap-5 md:gap-10 max-md:flex-col-reverse">
                    <div className="faqs md:w-3/4 bg-green-95 border-2 border-green-85 rounded-lg p-3 md:p-5 space-y-1.5 sm:space-y-3 md:space-y-5">
                        {
                            faqs.map((faq, index) => (<div className="faq-card not-last:border-b border-b-green-85 pb-3" key={index}>
                                <div className="card-header flex items-center justify-between gap-3">
                                    <h3 className="font-semibold sm:text-lg lg:text-xl w-full">{faq.question}</h3>
                                    <Button
                                        variant="dark"
                                        className="shrink-0"
                                        onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                                    >
                                        <FontAwesomeIcon icon={faPlus} className={`transition-transform will-change-auto duration-300 ease-out ${faqOpen === index ? "rotate-45" : ""}`} />
                                        <span className="sr-only">{faqOpen === index ? "Close" : "Open"}</span>
                                    </Button>
                                </div>
                                <div className={`grid transition-all will-change-auto duration-300 ${faqOpen === index ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
                                    <div className={`overflow-hidden transition-opacity will-change-auto duration-300 ease-out ${faqOpen === index ? "opacity-100 delay-100" : "opacity-0"}`}>
                                        <p className="font-medium text-grey-20!">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                    <div className="faqs-hero md:w-1/4 bg-green-95 border-2 border-green-85 rounded-lg p-3 md:p-5 flex flex-col items-center gap-5">
                        <img src={Hero} alt="Faq Hero" />
                        <div className="text text-center">
                            <h3 className="font-semibold sm:text-lg lg:text-xl w-full mb-3">Ask your question</h3>
                            <p className="font-medium text-grey-20!">Feel Free to Ask questions on anytime</p>
                        </div>
                        <Button to="/pricing">Ask A Question</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs;