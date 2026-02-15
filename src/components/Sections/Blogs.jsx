import SectionHeader from "./common/SectionHeader";
import data from "@data/blogs.json";

function Blogs() {

    const { title, description } = data;

    return (
        <section className="blogs-section py-5 md:py-10" id="blogs">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Blogs;