import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function BlogsPage() {
    useChangeTitle("Blogs");
    return (
        <div className="blogs-page">
            <main>
                <HeaderInformation page="blogs" />
            </main>
        </div>
    )
}

export default BlogsPage;