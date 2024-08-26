import { Route, Routes } from 'react-router-dom'
import './App.css'
import Gallery from './components/pages/Gallery/Gallery'
import Cart from './components/pages/Cart/Cart'
import About from './components/pages/About/About'
import NotFound from './components/pages/NotFound/NotFound'
import { createContext, useState } from 'react'
import { feedImages } from './data/constantVariables'
import Checkout from './components/pages/Checkout/Checkout'
import Payment from './components/pages/Payment/Payment'
import { licenseInitialState } from './utils/reducers/licenseReducer'



export const FeedContext = createContext()
export const FormContext = createContext();

function App() {

const [imagesAddedToCart, setImagesAddedToCart] = useState(["image-id-0", "image-id-13", "image-id-30"])
const [licenseInfo, setLicenseInfo] = useState(licenseInitialState)


  return (
    <>

    {/* We don't use the navbar here because we want a different layout in the pages, so we print it inside each page, we just have to make sure the paths in the NavLink or Links are not relative by adding / => path="/about"  || instead of => path="about"*/}
    <FeedContext.Provider value={{imagesAddedToCart, setImagesAddedToCart}}>
    <FormContext.Provider value={{licenseInfo, setLicenseInfo}}>
      <Routes>
        <Route index element={ <Gallery/> } />
        <Route path='/' element={ <Gallery/> } />
        <Route path='/gallery' element={ <Gallery/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/cart' element={ <Cart/>} />
        <Route path='/checkout' element={ <Checkout/>} />
        <Route path='/payment' element={ <Payment/>} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
      </FormContext.Provider>
      </FeedContext.Provider>
    </>
  )
}

export default App
  