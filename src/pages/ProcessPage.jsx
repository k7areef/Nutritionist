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
            </main>
        </div>
    )
}

export default ProcessPage;