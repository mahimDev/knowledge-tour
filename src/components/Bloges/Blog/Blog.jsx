
const Blog = ({ data, handleBookMarks, handleSpendTime }) => {
    const {
        author,
        author_img,
        cover_img,
        hashtags,
        posted_date,
        title,
        reading_time
    } = data

    return (
        <div className="py-6 border px-5 rounded-2xl my-2" >
            <img className="w-96" src={cover_img} alt="" />
            <h1 className="text-2xl font-semibold my-3">{title}</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full " src={author_img} alt="" />
                    <div className="ml-4">
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <button
                    onClick={() => handleBookMarks(data)}
                    className="flex border p-1 rounded-lg">
                    <p

                        className=""
                    >{reading_time} min</p>
                    <img className="w-5" src="https://img.icons8.com/?size=100&id=rVSB3GaDDURu&format=png&color=000000" alt="" />
                </button>
            </div>

            <p className="text-gray-600  my-2">{hashtags}</p>
            <button
                onClick={() => handleSpendTime(data)}
                className="border-b-2 hover:border-blue-700 ">mark as read</button>
        </div>
    );
};

export default Blog;   