
import { useState } from 'react'
import './App.css'
import Blogs from './components/Bloges/Blogs'
import BooksMarks from './components/BooksMarks/BooksMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const [spendTime, setSpendTime] = useState(0)
  const handleBookMarks = (item) => {
    const checkbookMarks = bookMarks.find(bookMark => bookMark.id == item.id)

    if (checkbookMarks) {
      alert("Item already Bookmarked")
      return
    } else {
      console.log("ok dewa jabeitem:", item.id)
    }
    const newBookMarks = [...bookMarks, item]
    setBookMarks(newBookMarks)


  }

  const handleSpendTime = (data) => {
    const checkTime = bookMarks.find(bookMarksTime => bookMarksTime.id == data.id)
    if (!checkTime) {
      alert("sorry don't read this item")

      return
    }
    const newSpendTime = spendTime + data.reading_time
    setSpendTime(newSpendTime)
    const removedBookMarks = bookMarks.filter(bookMark => bookMark.id !== data.id)
    setBookMarks(removedBookMarks)
  }
  return (
    <>
      <Header></Header>
      <hr />
      <div className='flex justify-around gap-5 w-11/12 mx-auto mt-10 '>
        <Blogs handleBookMarks={handleBookMarks} handleSpendTime={handleSpendTime}></Blogs>
        <BooksMarks bookMarks={bookMarks} spendTime={spendTime} ></BooksMarks>
      </div>
    </>
  )
}

export default App
