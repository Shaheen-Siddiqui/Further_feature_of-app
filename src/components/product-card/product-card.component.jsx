import './product-card.styles.scss';
import Button,{ BUTTON_TYPE_CLASS } from '../../components/button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const ProductCard = ({ products }) => {
    const { name, imageUrl, price } = products;
    const { addItemToCart } = useContext(CartContext);

    const itemFromproductToDropdown = () => {
        addItemToCart(products);
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
