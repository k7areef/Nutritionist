import SectionHeader from "./common/SectionHeader";
import data from "@data/ourBlogs.json";
import image1 from "@assets/images/our-blogs/images/1.png";
import image2 from "@assets/images/our-blogs/images/2.png";
import image3 from "@assets/images/our-blogs/images/3.png";
import image4 from "@assets/images/our-blogs/images/4.png";
import avatar1 from "@assets/images/our-blogs/avatars/1.png";
import avatar2 from "@assets/images/our-blogs/avatars/2.png";
import avatar3 from "@assets/images/our-blogs/avatars/3.png";
import avatar4 from "@assets/images/our-blogs/avatars/4.png";
import Button from "@components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const imagesMaper = {
    1: image1,
    2: image2,
    3: image3,
    4: image4
}
const avatarsMaper = {
    1: avatar1,
    2: avatar2,
    3: avatar3,
    4: avatar4
}

function OurBlogs() {

    const { title, description, blogs } = data;

    return (
        <section className="our-blogs-section py-5 md:py-10" id="ourBlogs">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        blogs.map((blog, index) => (<div className="blog-card space-y-3 p-5 rounded-lg bg-green-95 border border-green-85" key={index}>
                            <div className="image-container aspect-video rounded-md overflow-hidden">
                                <img src={imagesMaper[blog.id]} alt={blog.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="head-title">
                                <span className="category font-medium">{blog.category}</span>
                                <h3 className="font-semibold text-lg sm:text-xl mt-1">{blog.title}</h3>
                            </div>
                            <p className="blog-description font-medium">{blog.description}</p>
                            <div className="blog-foot flex items-center justify-between bg-green-97 border border-green-90 rounded-md p-3">
                                <div className="publisher-info flex items-center gap-3">
                                    <img src={avatarsMaper[blog.id]} alt="Publisher Avatar" className="rounded-md" />
                                    <div className="info">
                                        <h4 className="font-semibold text-lg mb-1">{blog.publisher.name}</h4>
                                        <span className="font-medium text-grey-35">{blog.publisher.date}</span>
                                    </div>
                                </div>
                                <div className="foot-actions flex items-center gap-3">
                                    <Button
                                        variant="secondary"
                                        className="text-grey-30!"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span className="sr-only">Like</span>
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="text-grey-30!"
                                    >
                                        <FontAwesomeIcon icon={faBookmark} />
                                        <span className="sr-only">Bookmark</span>
                                    </Button>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurBlogs;