import Blogs from "@components/Sections/Blogs";
import BlogsFilter from "@components/Sections/BlogsFilter";
import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function BlogsPage() {
    useChangeTitle("Blogs");
    return (
        <div className="blogs-page">
            <main>
                <HeaderInformation page="blogs" className="rounded-b-none" />
                <BlogsFilter />
                <Blogs />
            </main>
        </div>
    )
}

export default BlogsPage;