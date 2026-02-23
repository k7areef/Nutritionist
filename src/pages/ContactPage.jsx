import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle("Contact");
    return (
        <div className="contact-page">
            <main>
                <HeaderInformation page="contact" />
                <CTA />
            </main>
        </div>
    )
}

export default ContactPage;