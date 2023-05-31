import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Reviews from './Components/Reviews'
import { useState } from 'react'
import SingleReview from './Components/SingleReview'
import { Routes, Route } from 'react-router-dom';
import Comments from './Components/Comments'


function App() {
  const [reviews,setReviews] = useState([])

  return (
    <>
    <Nav/>
    <Header/>

     <Routes>
        <Route path='/' element={<Reviews reviews={reviews} setReviews={setReviews}/>} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>

    </>
  )
}

export default App
