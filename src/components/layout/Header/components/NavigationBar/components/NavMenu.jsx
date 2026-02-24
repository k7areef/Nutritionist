import { NavLink } from "react-router-dom";
import ContactLink from "../common/ContactLink";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/process", label: "Process" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Blog" }
];

/**
 * @typedef {Object} NavMenuProps
 * @prop {string} [className]
 * @prop {boolean} [isOpen]
 * @prop {Function} colseMenu
 */

function NavMenu({ className = "", isOpen = false, colseMenu = () => { } }) {
    return (
        <div className={`nav-menu${className ? " " + className : ""} max-lg:w-full max-lg:order-1 transition-all grid ${isOpen ? "max-lg:grid-rows-[1fr] max-lg:opacity-100 max-lg:mt-5" : "max-lg:grid-rows-[0fr] max-lg:opacity-0"}`}>
            <div className="overflow-hidden">

                <ul className="flex lg:items-center max-lg:flex-col gap-2">
                    {
                        links.map((link, index) => (<li key={index}>
                            <NavLink
                                to={link.to}
                                onClick={colseMenu}
                                className={({ isActive }) => `block transition p-2 font-semibold text-xl max-lg:rounded-lg ${isActive ? "lg:text-green-70 max-lg:bg-green-70 max-lg:text-grey-15" : "lg:hover:text-green-70 max-lg:sm:hover:bg-green-70 max-lg:sm:hover:text-grey-15"}`}
                            >
                                {link.label}
                            </NavLink>
                        </li>))
                    }
                    <li className="sm:hidden pb-3">
                        <ContactLink className="block" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu;