import { React, useContext } from 'react';
import { Link } from 'react-router-dom'

import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../../components/cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context';

const CardDropDown = () => {

  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container' >
      <div className="card-items">
        {

          cartItems.map((itemsOfarray) => {
            return <CartItem key={itemsOfarray.id} itemsOfarray={itemsOfarray} />
          })

        }
      </div>
      <Link to="/checkout"><Button>Go to checkout</Button></Link> 
    </div>
  )
}
export default CardDropDown;
