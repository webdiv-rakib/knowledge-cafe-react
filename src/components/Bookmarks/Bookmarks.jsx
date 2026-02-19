import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 ml-5 bg-gray-300 p-5 rounded-xl mt-5">
            <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;