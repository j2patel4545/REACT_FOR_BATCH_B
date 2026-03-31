import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import One from './Pages/One'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Three from './Pages/Three'
import Two from './Pages/Two'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<div>Hello, World!</div>} />
        <Route path='/abc'element={<One/>}/>
        <Route path='/three/:z' element={<Three/>} />
        <Route path='/two' element={<Two/>} />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
