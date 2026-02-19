import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 ml-5 bg-gray-300 p-5 rounded-xl mt-5">
            <div className="p-5 bg-purple-400 rounded-2xl">
                <p>Reading Time: {readingTime}</p>
            </div>
            <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;