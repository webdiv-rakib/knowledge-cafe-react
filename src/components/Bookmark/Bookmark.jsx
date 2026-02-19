const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className="bg-amber-50 p-5 rounded-xl mt-5">
            <h3 className="font-extralight text-xl">{title}</h3>
        </div>
    );
};

export default Bookmark;