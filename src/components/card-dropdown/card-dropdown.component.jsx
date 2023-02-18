import { React, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../button/button.component';
import CartItem from '../../components/cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context';
import { CartDropdownContainerSty, CartItemsSty, EmpatyMessageSty } from './cart-dropdown.styles'

const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const navToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainerSty>
      <CartItemsSty>

        {cartItems.length ? (cartItems.map((itemsOfarray) => {
          return <CartItem key={itemsOfarray.id} itemsOfarray={itemsOfarray} />
        })) : (<EmpatyMessageSty>you cart is empaty now !</EmpatyMessageSty>)

        }

      </CartItemsSty>
      <Button onClick={navToCheckout}>Go to checkout</Button>
    </CartDropdownContainerSty>
  )
}
export default CardDropDown;
