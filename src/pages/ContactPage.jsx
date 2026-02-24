import ContactForm from "@components/Sections/ContactForm";
import ContactInformation from "@components/Sections/ContactInformation";
import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle("Contact");
    return (
        <div className="contact-page">
            <main>
                <HeaderInformation page="contact" />
                <ContactInformation />
                <ContactForm />
                <CTA page="common" /> {/* Default CTA */}
            </main>
        </div>
    )
}

export default ContactPage;