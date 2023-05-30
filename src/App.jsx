import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Reviews from './Components/Reviews'
import { useState } from 'react'


function App() {
  const [reviews,setReviews] = useState([])

  return (
    <>
    <Nav/>
    <Header/>
    <Reviews reviews={reviews} setReviews={setReviews}/>
    </>
  )
}

export default App
