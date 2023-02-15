import { React, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../../components/cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context';

const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);

 const navigate = useNavigate();

 const navToCheckout=()=>{
 navigate('/checkout') 
 }

  return (
    <div className='cart-dropdown-container' >
      <div className="card-items">

        {
          cartItems.map((itemsOfarray) => {
            return <CartItem key={itemsOfarray.id} itemsOfarray={itemsOfarray} />
          })
        }

      </div>
      <Button onClick={navToCheckout}>Go to checkout</Button>
    </div>
  )
}
export default CardDropDown;
