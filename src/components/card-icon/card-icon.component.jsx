import './cart-icon.styles.jsx';
import shoppingBag from '../../assets/shopping-cart-emoji.png';
import { CartIconContainerSty, ShoppingIconSty, ImageCountSty } from './cart-icon.styles'
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CardIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch()



  const toggleIsCartOpen = () => { return dispatch(setIsCartOpen(!isCartOpen)) };


  return (
    <CartIconContainerSty onClick={toggleIsCartOpen}>
      <ShoppingIconSty src={shoppingBag} alt="card-icon" />
      <ImageCountSty> {cartCount} </ImageCountSty>
    </CartIconContainerSty>
  )
}

export default CardIcon;





