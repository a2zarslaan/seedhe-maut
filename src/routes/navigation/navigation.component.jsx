import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import Logo from '../../assets/logo.png' 
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

import './navigation.styles.scss'

const Navigation = () => {
    const {currentUser} = useContext(UserContext);

return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-contianer" to='/'>
                <img src={Logo} alt='logo' className='logo' />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>Shop</Link>
                {
                    currentUser ? (<span className="nav-link" onClick={signOutUser}>Sign Out</span>) : 
                    (<Link className="nav-link" to='/auth'>Sign In</Link>)
                }
            </div>
        </div>
        <Outlet />
    </Fragment>
)
}

export default Navigation