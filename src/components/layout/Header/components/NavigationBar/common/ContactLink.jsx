/**
 * @typedef {Object} ContactLinkProps
 * @prop {string} [className]
 */

import Button from "@components/UI/Button";

function ContactLink({ className = "" }) {
    return (
        <Button
            to={'/contact'}
            title="Go to Contact Page"
            aria-label="Go to Contact Page"
            className={`${className ? " " + className : ""}`}
        >
            Contact Us
        </Button>
    )
}

export default ContactLink;