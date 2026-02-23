import AppLogo from "@components/common/AppLogo";
import NavMenu from "./components/NavMenu";
import NavUtils from "./components/NavUtils";
import React from "react";

function NavigationBar() {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const toggleMenu = React.useCallback(() => setMenuIsOpen(prev => !prev), []);
    const colseMenu = React.useCallback(() => setMenuIsOpen(false), []);

    return (
        <nav className="navigation-bar bg-dark-green-15 py-4 border-b border-b-green-90 text-white">
            <div className="container flex items-center gap-x-5 max-md:justify-between max-md:flex-wrap">
                <AppLogo />
                <NavMenu className="md:ms-auto" isOpen={menuIsOpen} colseMenu={colseMenu} />
                <NavUtils isOpen={menuIsOpen} toggleMenu={toggleMenu} />
            </div>
        </nav>
    )
}

export default NavigationBar;