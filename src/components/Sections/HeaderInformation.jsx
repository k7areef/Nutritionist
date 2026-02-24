import data from "@data/headersInformation.json";
import hero from "@assets/images/header-information/header-information-abstract.png"
import icon from "@assets/images/header-information/header-information-icon.png"

/**
 * @typedef {Object} HeaderInformationProps
 * @prop {string} [className]
 * @prop {'about' | 'team' | 'process' | 'pricing' | 'blogs' | 'contact'} [page]
 */
/**
 * @param {HeaderInformationProps} props
 */

function HeaderInformation({ page = "about", className = "" }) {

    const { title, description } = data[page]

    return (
        <section className="header-information-section pt-5 md:pt-10" id="headerInformation">
            <div className="container">
                <div className={`content-wrapper p-5 md:p-10 pt-0! bg-green-95 border border-green-85 rounded-xl flex items-center justify-center flex-col gap-y-5 text-center${className ? " " + className : ""}`}>
                    <div className="hero-container relative">
                        <img
                            src={hero}
                            alt="Hero"
                        />
                        <div className="icon-container bg-linear-to-b from-green-70 to-green-95 rounded-lg flex items-center justify-center w-20 h-20 mx-auto absolute z-1 left-1/2 -translate-x-1/2 bottom-0">
                            <img
                                src={icon}
                                alt="Icon"
                            />
                        </div>
                    </div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">{title}</h1>
                    <p className="font-medium">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default HeaderInformation;