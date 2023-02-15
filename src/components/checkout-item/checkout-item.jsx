import React from 'react';
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context"
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';


const CheckOutItem = ({ cardItem }) => {
    const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext)
    const addItemHendler = () => addItemToCart(cardItem);
    const removeItemHandler = () => removeItemToCart(cardItem);
    const clearItemFromHandler = () => clearItemFromCart(cardItem);

    const { name, imageUrl, price, Quantity } = cardItem;
    return (<>
        <div className="checkout-item-container" >
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>

            <span className='quantity'>
                <div className="arrow" onClick={addItemHendler}>
                    &#10094;
                </div>
                <span className="value">{Quantity}</span>
                <div className="arrow" onClick={removeItemHandler}>
                    &#10095;
                </div>

            </span>

            <span className='price'>{price}</span>
            <div className="remove-button" onClick={clearItemFromHandler }>&#10060; </div>

        </div>
    </>
    )
}

export default CheckOutItem;
