import { Outlet, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
//INTERNAL-EXPORT ^^^
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropDown from '../../components/card-dropdown/card-dropdown.component';
import { NavigationSty, NavLinkSty, NavLinkContainerSty } from "./navigation.styles";
import { currentUserSelector } from "../../store/user/user.selector";
import { setCurrentUser } from "../../store/user/user.action";
import { selectIsCartOpen } from "../../store/cart/cart.selector";


const Navigationbaar = () => {
    const currentUser = useSelector(currentUserSelector)
    const isCartOpen=useSelector(selectIsCartOpen)


    async function signOutHandler() {
        await SignOutUser()
        setCurrentUser(null);
    }
    return (
        <>
            <NavigationSty >
                <Link className='logo-container' to='/'> LOGO </Link>
                <NavLinkContainerSty>
                    <NavLinkSty to="/shop">Shop</NavLinkSty>
                    {
                        currentUser ? (<NavLinkSty as="span" onClick={signOutHandler}>sign-out</NavLinkSty>) : (<NavLinkSty to="/auth">sign-in</NavLinkSty>)
                    }
                    <CardIcon />
                </NavLinkContainerSty>
                {isCartOpen && <CardDropDown />}
            </NavigationSty>
            <Outlet />
        </>
    )
}

export default Navigationbaar;
