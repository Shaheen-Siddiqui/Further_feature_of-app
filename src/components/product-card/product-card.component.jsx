import './product-card.styles.scss';
import Button from '../../components/button/button.component';
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
            <Button buttonType='inverted' onClick={itemFromproductToDropdown}>Add to card</Button>
        </div>
    )
}

export default ProductCard
