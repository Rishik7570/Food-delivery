import { useContext } from "react";
import { assets } from "../Assets/frontend_assets/Data";
import './FoodItem.css'
import { ShopContext } from "../Shopcontext/Shopcontext";

type fooditemprops = {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
}


const FoodItem:React.FC<fooditemprops> = ({id,name,image,price,description}) => {
  

    const shop = useContext(ShopContext)
  
    return (
    <div className="fooditem">
        <div className="fooditem-img">
            <img src={image} alt="" className="foodimg"/>
            {!shop?.cartItems[id]?
                <img src={assets.add_icon_white} className="add" onClick={()=>shop?.addtocart(id)} />
                :<div className="food-item-counter">
                    <img src={assets.remove_icon_red} onClick={()=>shop.removefromcart(id)} />
                    <p>{shop.cartItems[id]}</p>
                    <img src={assets.add_icon_green} onClick={()=>shop.addtocart(id)} />
                </div>}
        </div>
        <div className="fooditem-info">
            <div className="fooditem-rating-name">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
