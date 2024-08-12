import { Route, Routes } from 'react-router-dom'
import './App.css'
import Gallery from './components/pages/Gallery/Gallery'
import Cart from './components/pages/Cart/Cart'
import About from './components/pages/About/About'
import NotFound from './components/pages/NotFound/NotFound'
import NavBar from './components/elements/NavBar/NavBar'
import { useState } from 'react'

function App() {

  return (
    <>

    {/* We don't us the navbar here because we want a different layout in the pages, so we print it inside each page, we just have to make sure the paths in the NavLink or Links are not relative by adding / => path="/about"  || instead of => path="about"*/}
    
      <Routes>
        <Route index element={ <Gallery/> } />
        <Route path='/' element={ <Gallery/> } />
        <Route path='/gallery' element={ <Gallery/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/cart' element={ <Cart/>} />
        <Route path="*" element={ <NotFound />} />
      </Routes>

    </>
  )
}

export default App
