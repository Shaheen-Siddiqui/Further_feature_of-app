import React from 'react';
import "./checkout-item.styles.scss";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector"
import { useDispatch, useSelector } from 'react-redux';

const CheckOutItem = ({ cardItem }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addItemHendler = () => dispatch(addItemToCart(cartItems, cardItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cardItem))
    const clearItemFromHandler = () => dispatch(clearItemFromCart(cartItems, cardItem))

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
            <div className="remove-button" onClick={clearItemFromHandler}>&#10060; </div>

        </div>
    </>
    )
}

export default CheckOutItem;
