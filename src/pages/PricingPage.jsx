import Faqs from "@components/Sections/Faqs";
import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function PricingPage() {
    useChangeTitle("Pricing");
    return (
        <div className="pricing-page">
            <main>
                <HeaderInformation page="pricing" />
                <Faqs />
            </main>
        </div>
    )
}

export default PricingPage;