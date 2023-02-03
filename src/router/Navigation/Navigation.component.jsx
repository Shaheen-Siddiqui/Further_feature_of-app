import React, { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as FrootyLogo } from "../../assets/logo.svg";
import './navigation.styles.scss'
import { userContext } from '../../contexts/user.contexts';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropDown from '../../components/card-dropdown/card-dropdown.component'

const Navigationbaar = () => {
    const { currentUser, setCurrentUser } = useContext(userContext)

    async function signOutHandler() {
        await SignOutUser()
        setCurrentUser(null);
    }
    return (

        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'> <FrootyLogo /> </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to="/shop">Shop</Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutHandler}>sign-out</span>) : (<Link className='nav-link' to="/auth">sign-in</Link>)
                    }
                    <CardIcon />
                </div>
                <CardDropDown />
            </div>
            <Outlet />
        </>


    )
}

export default Navigationbaar
