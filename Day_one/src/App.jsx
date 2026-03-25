import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
   
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route element="Hello World" path='/' />
              <Route element={<Home/>} path='/abc' />
              <Route element={<About/>} path='/pqr'/>
              <Route element={<Home/>} path='/hello'/>

          </Routes>
          <Footer/>
      </BrowserRouter>
 
  )
}

export default App
