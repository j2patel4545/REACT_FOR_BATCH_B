import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageOne from '../images/a.png'

function Home() {
    const a = 10
  return (
    <div>
        Home page
        <img src={ImageOne} alt="" />
        {a}
    </div>
  )
}

export default Home
