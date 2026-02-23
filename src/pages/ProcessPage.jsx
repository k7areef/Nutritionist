import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import HowItWork from "@components/Sections/HowItWork";
import useChangeTitle from "@hooks/useChangeTitle";

function ProcessPage() {
    useChangeTitle("Process");
    return (
        <div className="process-page">
            <main>
                <HeaderInformation page="process" />
                <HowItWork />
                <CTA page="common" /> {/* Default CTA */}
            </main>
        </div>
    )
}

export default ProcessPage;