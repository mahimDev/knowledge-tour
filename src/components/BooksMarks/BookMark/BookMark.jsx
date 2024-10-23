
const BookMark = ({ bookMark }) => {

    return (
        <div>
            <h1 className="text-lg font-semibold bg-slate-300 rounded p-2 mt-2">{bookMark.title}</h1>
        </div>
    );
};

export default BookMark;