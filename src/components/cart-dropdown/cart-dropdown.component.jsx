import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {[].map(item => <CartItem cartItem={item} />)}            
            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown;