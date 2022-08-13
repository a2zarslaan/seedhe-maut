import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import Logo from '../../assets/logo.png' 
import './navigation.styles.scss'

const Navigation = () => {
return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-contianer" to='/'>
                <img src={Logo} alt='logo' className='logo' />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>Shop</Link>
                <Link className="nav-link" to='/sign-in'>Sign In</Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
)
}

export default Navigation