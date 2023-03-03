import { useSelector } from 'react-redux';
import './checkout.styles.scss'
import CheckOutItem from "../../components/checkout-item/checkout-item";
import { selectCartTotal,selectCartItems } from "../../store/cart/cart.selector";

const CheckOut = () => {

  const cartItems=useSelector(selectCartItems);
  const cartTotal=useSelector(selectCartTotal)


  return (<>

    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Discription</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
    </div>
    {
      cartItems.map((cardItem) => {
        <span className='total'>total: 3407 rs</span>
        return <CheckOutItem key={cardItem.id} cardItem={cardItem} />
      })
    }
    <span className='total'>total: {cartTotal} rs</span>

  </>)


}

export default CheckOut
