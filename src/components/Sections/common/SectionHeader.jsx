/**
 * @typedef {object} SectionHeader
 * @prop {string} title
 * @prop {string} [description]
*/

/**
 * @param {SectionHeader} props
*/

function SectionHeader({ title, description }) {
    return (
        <div className="section-header mb-5 md:mb-10">
            <div className="container flex flex-col items-center gap-3 text-center">
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl">{title}</h2>
                {
                    description && <p className="font-medium md:max-w-250">{description}</p>
                }
            </div>
        </div>
    )
}

export default SectionHeader;