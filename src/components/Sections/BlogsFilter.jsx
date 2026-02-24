import data from "@data/blogs.json";

function BlogsFilter() {
    return (
        <section className="blogs-filter-section" id="blogsFilter">
            <div className="container">
                <div className="content-wrapper bg-dark-green-15 text-white p-5 md:p-10 rounded-b-lg flex items-center gap-2 flex-wrap">
                    {
                        data.categories.map((category, index) => (<button
                            key={index}
                            type="button"
                            title={category}
                            aria-label={category}
                            className={`category-tab bg-dark-green-25 border border-dark-green-30 rounded-md py-2 px-4 flex-1 text-nowrap text-center transition`}
                        >
                            {category}
                        </button>))
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogsFilter;