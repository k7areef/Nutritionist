import Blogs from "@components/Sections/Blogs";
import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function BlogsPage() {
    useChangeTitle("Blogs");
    return (
        <div className="blogs-page">
            <main>
                <HeaderInformation page="blogs" />
                <Blogs />
            </main>
        </div>
    )
}

export default BlogsPage;