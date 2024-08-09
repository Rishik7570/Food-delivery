import { useContext } from 'react'
import './Explore-menu.css'
import { ShopContext } from '../../../Shopcontext/Shopcontext'


interface Explore_menu_props {
  category:string
  setcategory:React.Dispatch<React.SetStateAction<string>>
}


const Explore_menu:React.FC<Explore_menu_props> = ({category,setcategory}) => {
    const Shop = useContext(ShopContext)
  
    return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
      <div className="explore-menu-description">
        <p>We provide you here a list of selected delicacies located near your area.</p>
      </div>
      <div className="explore-menu-list">
        {Shop?.menu.map((item,key)=>{
            return(
                <div onClick={()=>setcategory(prev=>prev==item.menu_name?'All':item.menu_name)}
                               key={key} className="explore-menu-list-item">

                      <img className={category==item.menu_name?"active":""} src={item.menu_image} alt="" />
                      <p className={category==item.menu_name?"underlined-text":""}>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Explore_menu
