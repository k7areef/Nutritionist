import AppLogo from "@components/common/AppLogo";
import contactInfo from "@data/contactInfo.json";
import { faArrowUp, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const iconsMaper = {
    email: faEnvelope,
    phone: faPhone,
    location: faLocationDot
}

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/process", label: "Process" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Blog" },
    { to: "/contact", label: "Contact" },
]

function Footer() {
    return (
        <footer className="bg-dark-green-15 text-white py-5 md:py-10">
            <div className="container">
                <div className="main-content mb-5 md:mb-10 flex items-center justify-between gap-5 max-lg:flex-wrap">
                    <AppLogo />
                    <div className="fast-links flex items-center gap-3 flex-wrap max-lg:w-full max-lg:order-1">
                        {
                            links.map((link, index) => (<Link
                                key={index}
                                to={link.to}
                                className="font-semibold transition duration-200 ease-in sm:hover:text-green-70"
                            >{link.label}</Link>))
                        }
                    </div>
                    <div className="scroll-to-top flex items-center gap-3">
                        <h3 className="font-semibold">Go To Top</h3>
                        <button
                            type="button"
                            onClick={() => window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })}
                            className="w-15 h-15 flex items-center justify-center rounded-full bg-dark-green-20 text-xl transition duration-200 ease-in sm:hover:bg-dark-green-25"
                        >
                            <FontAwesomeIcon icon={faArrowUp} />
                            <span className="sr-only">Go To Top</span>
                        </button>
                    </div>
                </div>
                <div className="copyright p-4 md:py-3 md:px-6 rounded-lg bg-dark-green-20 border border-dark-green-25 flex md:items-center justify-between gap-5 max-md:flex-col">
                    <div className="contact-info flex items-center gap-3 flex-wrap">
                        {
                            contactInfo.map((contact, index) => (<a
                                key={contact.id || index}
                                href={contact.value}
                                title={contact.label}
                                aria-label={contact.label}
                                rel="noopener noreferrer"
                                className="contact-info-item flex items-center gap-2 py-2 px-4 rounded-md border border-dark-green-25 transition duration-200 ease-in sm:hover:bg-dark-green-25 max-md:w-full"
                            >
                                <FontAwesomeIcon icon={iconsMaper[contact.icon]} className="text-green-70" />
                                <span>{contact.label}</span>
                            </a>))
                        }
                    </div>
                    <p className="text-white! text-center">© {new Date().getFullYear()} Nutritionist. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;