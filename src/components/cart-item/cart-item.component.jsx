import './cart-item.styles.scss';


const CartItem = ({ itemsOfarray }) => {

    const { name, Quantity,imageUrl,price } = itemsOfarray;
    return (
        <div className='cart-item-container'>
            <img  src={imageUrl} alt={`${name}`} />
            <div className="item-details">

            <strong className='name'>{name} </strong>
            <strong className='price'>{Quantity} * $ {price}</strong>
            </div>
        </div>
    )
}

export default CartItem;
