import React from "react";
import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/pricing.json";

/**
 * @typedef {Object} FaqsProps
 * @prop {"pricing" | "common"} [page]
 */

/**
 * @param {FaqsProps} props
 */

function OurPricing({ page = "common" }) {

    const { title, description, plans } = data;
    const [currentPlan, setCurrentPlan] = React.useState("monthly");

    return (
        <section className="our-pricing-section py-5 md:py-10" id="ourPricing">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="plans-selectors flex flex-col items-center gap-3 mb-5 md:mb-10">
                    <div className="selectors flex items-center justify-center gap-2 border border-green-80 rounded-md py-2 px-4">
                        <Button
                            variant={currentPlan === "monthly" ? "dark" : "ghost"}
                            onClick={() => setCurrentPlan("monthly")}
                            className="min-w-30"
                        >
                            Monthly
                        </Button>
                        <Button
                            variant={currentPlan === "yearly" ? "dark" : "ghost"}
                            onClick={() => setCurrentPlan("yearly")}
                            className="min-w-30"
                        >
                            Yearly
                        </Button>
                    </div>
                    <p className="font-medium">Save to 50%</p>
                </div>
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
                    {
                        plans.map((plan, index) => (<div className="plan-card bg-green-95 border border-green-90 rounded-lg p-5 space-y-5" key={plan.id || index}>
                            <div className="head-text">
                                <h3 className="plan-name text-lg sm:text-2xl mb-1 font-semibold">{plan.name}</h3>
                                <p className="plan-subtitle font-medium">{plan.subtitle}</p>
                            </div>
                            {/* Description */}
                            <p className="plan-description font-medium line-clamp-4">{plan.description}</p>
                            {/* Features */}
                            {
                                (page !== "common" && plan.features?.length > 0) && (
                                    <ul className="features bg-green-90 rounded-lg border-2 border-green-85">
                                        {
                                            plan.features.map((feature, index) => (<li className="feature p-3 not-last-of-type:border-b-2 not-last-of-type:border-b-green-85" key={index}>
                                                <p className="font-medium text-grey-20!">{feature}</p>
                                            </li>))
                                        }
                                    </ul>
                                )
                            }
                            {/* Custom Description */}
                            {
                                (page !== "common" && plan.customDescription) && (
                                    <div className="custom-description p-3 bg-dark-green-20 rounded-lg">
                                        <p className="font-medium text-white!">{plan.customDescription}</p>
                                    </div>
                                )
                            }
                            {/* Pricve */}
                            <div className="plan-price flex items-center gap-0.5 mt-auto">
                                <div className="price font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{plan.price[currentPlan]}</div>
                                <span>/{String(currentPlan).toLowerCase().replace("ly", "")}</span>
                            </div>
                            <Button
                                to={'/'}
                                className="text-center block"
                            >
                                Choose Plan
                            </Button>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurPricing;