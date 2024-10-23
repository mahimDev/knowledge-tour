import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = ({ handleBookMarks, handleSpendTime }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            {
                data.map(data =>
                    <Blog
                        key={data.id}
                        data={data}
                        handleBookMarks={handleBookMarks}
                        handleSpendTime={handleSpendTime}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;