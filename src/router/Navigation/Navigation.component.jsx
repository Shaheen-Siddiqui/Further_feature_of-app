import React, { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';
// import { ReactComponent as FrootyLogo } from "../../assets/logo.svg";
import { userContext } from '../../contexts/user.contexts';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropDown from '../../components/card-dropdown/card-dropdown.component';
import { CartContext } from '../../contexts/cart.context'
import { NavigationSty, NavLinkSty, NavLinkContainerSty } from "./navigation.styles";


const Navigationbaar = () => {
    const { currentUser, setCurrentUser } = useContext(userContext);
    const { isCartOpen } = useContext(CartContext);

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
