import {CartItemContainer, CartItemDetails, CartItemImg, CartItemText} from './cart-item.styles'


const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (
        <CartItemContainer>
            <CartItemImg src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <CartItemText className='name'>{name}</CartItemText>
                <CartItemText className="price">{quantity} x ${price}</CartItemText>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem