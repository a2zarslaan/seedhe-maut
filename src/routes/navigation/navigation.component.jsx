import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import Logo from '../../assets/logo.png' 
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

import {NavigationContainer, LogoContainer, LogoImg, NavLinks, NavLink} from './navigation.styles'

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <LogoImg src={Logo} alt='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>Shop</NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) : 
                        (<NavLink className="nav-link" to='/auth'>Sign In</NavLink>)
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation