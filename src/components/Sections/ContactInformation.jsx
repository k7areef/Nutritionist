import contactData from "@data/contactInfo.json";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsMaper = {
    email: faEnvelope,
    phone: faPhone,
    location: faLocationDot
}

function ContactInformation() {
    return (
        <section className="contact-information-section" id="contactInformation">
            <div className="container">
                <div className="content-wrapper bg-dark-green-15 text-white p-5 md:p-10 rounded-b-lg flex lg:items-center justify-center gap-5 max-lg:flex-col">
                    {
                        contactData.map((contact, index) => (<a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={contact.name}
                            aria-label={contact.name}
                            className="flex flex-col justify-center items-center gap-2 py-5 px-10 bg-dark-green-20 border border-dark-green-25 rounded-md transition sm:hover:border-green-70 duration-200 ease-in"
                        >
                            <FontAwesomeIcon icon={iconsMaper[contact.icon]} className="text-green-70 text-2xl" />
                            <span>{contact.label}</span>
                        </a>))
                    }
                </div>
            </div>
        </section>
    )
}

export default ContactInformation;