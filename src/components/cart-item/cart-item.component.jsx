import './cart-item.styles.jsx';
import { CartItemContainerSty, ItemDetailsSty, NameSty } from "./cart-item.styles";

const CartItem = ({ itemsOfarray }) => {

    const { name, Quantity,imageUrl,price } = itemsOfarray;
    return (
        <CartItemContainerSty>
            <img  src={imageUrl} alt={`${name}`} />
            <ItemDetailsSty>
            <NameSty>{name} </NameSty>
            <strong>{Quantity} * $ {price}</strong> 
            </ItemDetailsSty>
        </CartItemContainerSty>
    )
}

export default CartItem;
