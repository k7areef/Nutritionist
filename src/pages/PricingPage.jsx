import Faqs from "@components/Sections/Faqs";
import HeaderInformation from "@components/Sections/HeaderInformation";
import OurPricing from "@components/Sections/OurPricing";
import useChangeTitle from "@hooks/useChangeTitle";

function PricingPage() {
    useChangeTitle("Pricing");
    return (
        <div className="pricing-page">
            <main>
                <HeaderInformation page="pricing" />
                <OurPricing page="pricing" />
                <Faqs />
            </main>
        </div>
    )
}

export default PricingPage;