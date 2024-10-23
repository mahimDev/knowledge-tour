import BookMark from "./BookMark/BookMark";

const BooksMarks = ({ bookMarks, spendTime }) => {
    return (
        <div className="text-center  ">
            <h1 className="text-violet-600 text-xl font-bold border-2 border-violet-600 rounded-md p-3 ">Spend Time on read : {spendTime}</h1>
            <div className=" border rounded-md p-6 mt-2">
                <h1 className="text-3xl font-bold  mb-4 ">BookMarks : {bookMarks.length} </h1>
                <hr />
                {
                    bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark} ></BookMark>)
                }
            </div>
        </div>
    );
};

export default BooksMarks;