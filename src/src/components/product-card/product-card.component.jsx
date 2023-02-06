import './product-card.styles.scss';
import Button from '../../components/button/button.component'

const ProductCard = ({ products }) => {
    const { name, imageUrl, price } = products;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </div>
    )
}

export default ProductCard
