import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactLink from "../common/ContactLink";

/**
 * @typedef {Object} NavUtilsProps
 * @prop {string} [className]
 * @prop {boolean} isOpen
 * @prop {Function} toggleMenu
 */

/**
 * @param {NavUtilsProps} props
 */

function NavUtils({ className = "", isOpen = false, toggleMenu = () => { } }) {
    return (
        <div className={`nav-utils flex items-center gap-3${className ? " " + className : ""}`}>
            <ContactLink className="max-sm:hidden" />
            <button
                type="button"
                onClick={toggleMenu}
                className="lg:hidden text-3xl"
                title={isOpen ? "Close" : "Open"}
                aria-label={isOpen ? "Close" : "Open"}
            >
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                <span className="sr-only">Nav Menu Toggler</span>
            </button>
        </div>
    )
}

export default NavUtils;