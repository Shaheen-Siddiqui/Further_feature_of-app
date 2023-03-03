import { useNavigate } from "react-router-dom";
import Button from '../button/button.component';
import CartItem from '../../components/cart-item/cart-item.component'
import { CartDropdownContainerSty, CartItemsSty, EmpatyMessageSty } from './cart-dropdown.styles'
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector";

const CardDropDown = () => {
  const  cartItems  = useSelector(selectCartItems)

  const navigate = useNavigate();

  const navToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainerSty>
      <CartItemsSty>

        {cartItems.length ? (cartItems.map((itemsOfarray) => {
          return <CartItem key={itemsOfarray.id} itemsOfarray={itemsOfarray} />
        })) : (<EmpatyMessageSty>you cart is empaty now !</EmpatyMessageSty>)

        }

      </CartItemsSty>
      <Button onClick={navToCheckout}>Go to checkout</Button>
    </CartDropdownContainerSty>
  )
}
export default CardDropDown;
