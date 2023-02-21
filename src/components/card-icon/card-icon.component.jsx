import { React, useContext } from 'react';
import './cart-icon.styles.jsx';
import { CartContext } from '../../contexts/cart.context'
import shoppingBag from '../../assets/shopping-cart-emoji.png';
import { CartIconContainerSty, ShoppingIconSty, ImageCountSty } from './cart-icon.styles'


const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => { return setIsCartOpen(!isCartOpen) };


  return (
    <CartIconContainerSty onClick={toggleIsCartOpen}>
      <ShoppingIconSty src={shoppingBag} alt="card-icon" />
      <ImageCountSty> {cartCount} </ImageCountSty>
    </CartIconContainerSty>
  )
}

export default CardIcon;





