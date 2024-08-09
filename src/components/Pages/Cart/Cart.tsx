import { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../Shopcontext/Shopcontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const shopcontext = useContext(ShopContext);

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {shopcontext?.food.map((item, index) => {
          if (shopcontext.cartItems[item.id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{shopcontext.cartItems[item.id]}</p>
                  <p>${item.price * shopcontext.cartItems[item.id]}</p>
                  <p onClick={()=>shopcontext.removefromcart(item.id)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${shopcontext?.gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${(shopcontext?.gettotalcartamount()||0)+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/place_order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <p>If you have a promo code, Enter it here:</p>
          <div className="cart-promo-input">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
