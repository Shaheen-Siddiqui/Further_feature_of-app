import React from 'react';
import {ReactComponent as ShoppingBadImage} from '../../assets/shopping-bag.svg';
import '../../components/card-icon/cart-icon.styles.scss';

const CardIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingBadImage className='shopping-icon'/>
      <span className='item-count'>12</span>
    </div>
  )
}

export default CardIcon;





