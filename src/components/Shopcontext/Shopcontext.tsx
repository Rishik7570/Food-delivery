import { ReactNode, createContext, useState } from "react";
import {  food_list, menu_list } from "../Assets/frontend_assets/Data";



type data = {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
}

type menudata = {
    menu_name: string
    menu_image: string
}

interface cart {
    [key:string]:number
}

type shopcontenttype = {
    food:data[]
    menu:menudata[]
    addtocart: (itemID: string) => void
    removefromcart: (itemID: string) => void
    cartItems: cart
    setcartItems: React.Dispatch<React.SetStateAction<cart>>
    gettotalcartamount: () => number
}

type ShopContentProviderProps = {
    children:ReactNode
}


export const ShopContext = createContext<shopcontenttype|null>(null)

const ShopContextProvider:React.FC<ShopContentProviderProps> = (props)=> {
    
    const [cartItems,setcartItems] = useState<cart>({})

    const addtocart = (itemID:string):void=>{
        setcartItems((prev)=>({...prev,[itemID]:(prev[itemID] || 0)+1}))
    }

    const removefromcart = (itemID: string): void => {
        setcartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemID] > 1) {
                updatedCart[itemID] -= 1;
            } else {
                delete updatedCart[itemID];
            }
            return updatedCart;
        });
    }

    const gettotalcartamount = ()=>{
        let totalamount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                const iteminfo = food_list.find((product) => product.id === item);
                totalamount+= (iteminfo?.price || 0) * cartItems[item];
            }
        }
        return totalamount;
    }


    const contextvalue:shopcontenttype = {food:food_list, menu:menu_list, addtocart, removefromcart, cartItems,
                                             setcartItems, gettotalcartamount}


    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
