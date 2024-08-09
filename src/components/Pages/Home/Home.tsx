
import { useState } from 'react'
import Explore_menu from './Explore menu/Explore-menu'
import Hero from './Hero Banner/Hero'
import './Home.css'
import Food_display from './Food display/Food_display'



const Home = () => {
  
  const[category,setcategory] = useState('All')
  
  return (
    <div>
      <Hero />
      <Explore_menu category={category} setcategory={setcategory}/>
      <Food_display category={category}/>
    </div>
  )
}

export default Home
