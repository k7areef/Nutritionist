import data from "@data/blogs.json";
import image1 from "@assets/images/blogs/1.png";
import image2 from "@assets/images/blogs/2.png";
import image3 from "@assets/images/blogs/3.png";
import image4 from "@assets/images/blogs/4.png";
import image5 from "@assets/images/blogs/5.png";
import image6 from "@assets/images/blogs/6.png";
import image7 from "@assets/images/blogs/7.png";
import image8 from "@assets/images/blogs/8.png";
import image9 from "@assets/images/blogs/9.png";
import image10 from "@assets/images/blogs/10.png";
import image11 from "@assets/images/blogs/11.png";
import image12 from "@assets/images/blogs/12.png";
import Button from "@components/UI/Button";

const imagesMaper = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8,
    9: image9,
    10: image10,
    11: image11,
    12: image12
}

function Blogs() {
    return (
        <section className="blogs-section py-5 md:py-10" id="blogs">
            <div className="container">
                <div className="content-wrapper bg-[#f6fbe8] border border-green-85 rounded-lg grid lg:grid-cols-2">
                    {
                        data.blogs.map((blog, index) => (<div className="blog-card even:border-s even:border-s-green-85 border-b border-b-green-85" key={index}>
                            <div className="head-category p-5 mb-5">
                                <div className="pb-2 border-b border-b-green-70 w-fit font-semibold text-lg">{blog.category}</div>
                            </div>
                            <div className="image-wrapper px-5 border-b border-b-green-85">
                                <img src={imagesMaper[blog.id]} alt={blog.title} className="rounded-t-md w-[85%] ms-auto object-cover" />
                            </div>
                            <div className="blog-content p-5 flex items-center gap-5 max-sm:flex-wrap">
                                <div className="text-container w-full">
                                    <h3 className="font-semibold text-xl sm:text-2xl mb-2">{blog.title}</h3>
                                    <p className="font-medium">{blog.description}</p>
                                </div>
                                <Button
                                    to={"/"}
                                    title="Read More"
                                    aria-label="Read More"
                                    className="shrink-0"
                                >Read More</Button>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blogs;