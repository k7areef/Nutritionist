import { Formik } from "formik";
import * as Yup from 'yup';
import Button from "@components/UI/Button";
import FormikField from "@components/UI/FormikField";
import mapImage from "@assets/images/contact-form-map.svg";
import socialProfiles from "@data/socialProfiles.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const fields = [
    {
        id: "fullName",
        name: "fullName",
        type: "text",
        placeholder: "Enter your Name",
        label: "Full Name",
        autoComplete: "on",
        typeField: "input"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        placeholder: "Enter your Email",
        label: "Email",
        autoComplete: "on",
        typeField: "input"
    },
    {
        id: "phone",
        name: "phone",
        type: "tel",
        placeholder: "Enter your Phone",
        label: "Phone Number",
        autoComplete: "on",
        typeField: "input",
        parentClassName: "md:col-span-2"
    },
    {
        id: "message",
        name: "message",
        placeholder: "Enter your Message",
        label: "Message",
        typeField: "textarea",
        parentClassName: "md:col-span-2"
    }
];
const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    message: ""
};
const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
});

const socialProfilesIconsMaper = {
    facebook: faFacebook,
    twitter: faXTwitter,
    instagram: faInstagram,
    linkedin: faLinkedin
};

function ContactForm() {
    return (
        <section className="contact-form-section py-5 md:py-10" id="contactForm">
            <div className="container">
                <div className="content-wrapper grid md:grid-cols-2 gap-5 md:gap-10 bg-green-95 border border-green-85 rounded-lg p-5 sm:p-10 md:p-15">
                    <div className="form-wrapper">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="fields-wrapper grid md:grid-cols-2 gap-5 mb-5">
                                        {
                                            fields.map((field, index) => (<FormikField
                                                key={index}
                                                {...{
                                                    ...field,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }}
                                            />))
                                        }
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </Formik>
                    </div>
                    <div className="map-wrapper">
                        <img src={mapImage} alt="Map" className="rounded-md" />
                        <div className="social-profiles flex items-center justify-center md:justify-end gap-3 mt-5">
                            {
                                socialProfiles.map((profile, index) => (<Button
                                    key={index}
                                    target="_blank"
                                    href={profile.href}
                                    rel="noreferrer"
                                    title={profile.label}
                                    aria-label={profile.label}
                                    className="p-0! w-12 h-12 flex items-center justify-center"
                                >
                                    <FontAwesomeIcon icon={socialProfilesIconsMaper[profile.icon]} className="text-xl" />
                                    <span className="sr-only">{profile.label}</span>
                                </Button>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;