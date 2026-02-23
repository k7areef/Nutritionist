import { NavLink } from "react-router-dom";
import ContactLink from "../common/ContactLink";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/process", label: "Process" },
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
        <div className={`nav-menu${className ? " " + className : ""} max-md:w-full max-md:order-1 transition-all grid ${isOpen ? "max-md:grid-rows-[1fr] max-md:opacity-100 max-md:mt-5" : "max-md:grid-rows-[0fr] max-md:opacity-0"}`}>
            <div className="overflow-hidden">

                <ul className="flex md:items-center max-md:flex-col gap-2">
                    {
                        links.map((link, index) => (<li key={index}>
                            <NavLink
                                to={link.to}
                                onClick={colseMenu}
                                className={({ isActive }) => `block transition p-2 font-semibold text-xl max-md:rounded-md ${isActive ? "md:text-green-70 max-md:bg-green-70 max-md:text-grey-15" : "md:hover:text-green-70 max-md:sm:hover:bg-green-70 max-md:sm:hover:text-grey-15"}`}
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