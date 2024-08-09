import { useContext } from 'react'
import './Food_display.css'
import { ShopContext } from '../../../Shopcontext/Shopcontext'
import FoodItem from '../../../Food Item/FoodItem'

interface Food_display_props {
    category:string
}

const Food_display:React.FC<Food_display_props> = ({category}) => {

    const Shop = useContext(ShopContext)


  return (
    <div className='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {Shop?.food.map((item,key)=>{
            if (category=='All' || category==item.category){
              return(<FoodItem key={key} id={item.id} image={item.image} name={item.name}
                category={category} description={item.description} price={item.price}/>)
            }
        })}
      </div>
    </div>
  )
}

export default Food_display
