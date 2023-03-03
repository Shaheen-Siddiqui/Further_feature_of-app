import './product-card.styles.scss';
import Button, { BUTTON_TYPE_CLASS } from '../../components/button/button.component';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ products }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const { name, imageUrl, price } = products;


    const itemFromproductToDropdown = () => {
        dispatch(addItemToCart(cartItems, products));
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={itemFromproductToDropdown}>ADD TO CARD..</Button>
        </div>
    );
}

export default ProductCard
