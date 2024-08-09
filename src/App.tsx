import './App.css'
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Pages/Home/Home"
import Cart from './components/Pages/Cart/Cart'
import Place_order from './components/Pages/Place order/Place_order'
import { useState } from 'react'
import Login_pop_up from './components/Pages/Login pop up/Login_pop_up'
import Scroll_Button from './components/Scroll Button/Scroll_Button'



const App = () => {

  const[showLogin, setshowLogin] = useState(false)

  return (
    <>
      {showLogin?<Login_pop_up setshowLogin={setshowLogin}/>:<></>}
      <div className="app">
          <Navbar setshowLogin={setshowLogin}/>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/place_order' element={<Place_order />} />
          </Routes>
      </div>
      <Scroll_Button />
      <Footer />
    </>
  )
}

export default App
