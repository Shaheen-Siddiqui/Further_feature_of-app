import { React, useContext } from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CardDropDown = () => {

  return (
    <div className='cart-dropdown-container' >
      <div className="card-items">
        <Button>Go to checkout</Button>
      </div>
    </div>
  )
}
export default CardDropDown;
