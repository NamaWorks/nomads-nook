import { Route, Routes } from 'react-router-dom'
import './App.css'
import Gallery from './components/pages/Gallery/Gallery'
import Cart from './components/pages/Cart/Cart'
import About from './components/pages/About/About'
import NotFound from './components/pages/NotFound/NotFound'
import NavBar from './components/elements/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Gallery/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/cart' element={ <Cart/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
