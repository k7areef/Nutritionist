import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import topBannerIcon from "@assets/images/top-banner/top-banner-icon.svg"
import topBannerAbstract1 from "@assets/images/top-banner/top-banner-abstract-1.svg"
import topBannerAbstract2 from "@assets/images/top-banner/top-banner-abstract-2.svg"

function TopBanner() {
    return (
        <div className="top-banner bg-dark-green-15 py-4 border-b border-b-dark-green-20 text-white relative overflow-hidden z-0">
            <div className="container">
                <Link
                    to={'/'}
                    className="block bg-dark-green-20 border border-dark-green-25 rounded-md py-2 px-4 md:relative overflow-hidden group"
                >
                    <img src={topBannerAbstract1} alt="Abstract 1" className="absolute max-md:-left-30 md:left-0 max-md:bottom-0 md:top-1/2 md:-translate-y-1/2 max-md:-z-1 md:z-0 object-cover md:h-16 md:max-h-16 pointer-events-none" />
                    <div className="content-wrapper relative z-1 flex items-center justify-center gap-2">
                        <img src={topBannerIcon} alt="Icon" />
                        <p className="text-white!">Join Our Personalized Nutrition Demo For Free</p>
                        <FontAwesomeIcon icon={faArrowRight} className="transition group-hover:translate-x-2" />
                    </div>
                    <img src={topBannerAbstract2} alt="Abstract 2" className="absolute max-md:-right-30 right-0 max-md:bottom-0 md:top-1/2 md:-translate-y-1/2 max-md:-z-1 md:z-0 object-cover md:h-16 md:max-h-16 pointer-events-none" />
                </Link>
            </div>
        </div>
    )
}

export default TopBanner;