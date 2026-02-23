import { Link } from "react-router-dom";
import desktopLogo from "@assets/images/logo/desktop.svg";
import labtopLogo from "@assets/images/logo/laptop.svg";
import mobileLogo from "@assets/images/logo/mobile.svg";

function AppLogo() {
    return (
        <Link
            to={'/'}
            className="app-logo"
        >
            <picture>
                <source media="(min-width: 1024px)" srcSet={desktopLogo} />
                <source media="(min-width: 768px)" srcSet={labtopLogo} />
                <img src={mobileLogo} alt="Logo" />
            </picture>
        </Link>
    )
}

export default AppLogo;