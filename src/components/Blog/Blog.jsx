import '../Blog/Blog.css'
const Blog = ({ blog }) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog
    return (
        <div className="">
            <img className="w-full h-[600px] rounded-2xl mt-15" src={cover} alt="" />
            <div className="flex justify-between mt-5">
                <div className="flex justify-center items-center gap-2">
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div>
                        <h1 className="font-bold text-2xl">{author}</h1>
                        <p className="font-semibold text-sm color-1">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className="color-1">{reading_time} min read</span>

                </div>
            </div>
            <h2 className="text-4xl font-bold mt-3">{title}</h2>
            <p className='color-1'>
                {
                    hashtags.map(hash => <span><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;