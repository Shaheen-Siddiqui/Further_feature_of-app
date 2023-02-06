import {React, useContext} from 'react';
import {ReactComponent as ShoppingBadImage} from '../../assets/shopping-bag.svg';
import '../../components/card-icon/cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context'
import shoppingBag from '../../assets/shopping-cart-emoji.png'



const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => { return setIsCartOpen(!isCartOpen)};

 
  return (
    <div className='cart-icon-container'  onClick={toggleIsCartOpen}>
      <img src={shoppingBag} alt="card-icon" className='shopping-icon'/>
      <span className='item-count'>12</span>
    </div>
  )
}

export default CardIcon;





