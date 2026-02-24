import { Link } from "react-router-dom";

/**
 * @typedef {Object} CustomButtonProps
 * @property {string} [to]
 * @property {string} [href]
 * @property {'primary' | 'secondary' | 'ghost' | 'dark'} [variant]
 * @property {React.ReactNode} children
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement> | import("react-router-dom").LinkProps} [props]
 */

/**
 * @param {ButtonProps & React.HTMLAttributes<HTMLElement>} props
 * @typedef {CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & import("react-router-dom").LinkProps} ButtonProps
 */

function Button({ variant = "primary", to = "", href = "", children, ...props }) {

    const variants = {
        primary: "bg-green-70 text-grey-15 sm:hover:bg-green-80",
        secondary: "bg-green-95 border border-green-85 sm:hover:bg-green-90",
        ghost: "bg-transparent text-inherit",
        dark: "bg-dark-green-20 text-white",
    }

    const className = `px-4 py-2 sm:py-3 rounded-md font-semibold transition duration-300 ease-in-out ${variants[variant]} ${props.className}`;

    if (href) {
        return (
            <a
                href={href}
                {...props}
                className={className}
            >
                {children}
            </a>
        )
    }

    if (to) {
        return (
            <Link
                to={to}
                {...props}
                className={className}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            {...props}
            className={className}
            type={props.type || "button"}
        >
            {children}
        </button>
    )
}

export default Button;