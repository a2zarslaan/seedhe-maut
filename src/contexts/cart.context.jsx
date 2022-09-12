import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    //if found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity:cartItem.quantity + 1}
            : cartItem
        )
    }

    //return new array with modified cartItems/ new cartItem
    return [...cartItems, {...productToAdd, quantity:1}];
}


const removeCartItem = (cartItems, productToRemove) => {
    // find if cartItems contains productToRemove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)

    //check if quantity is equal to one, if it is, remove the item
    if(existingCartItem.quantity === 1) {
       return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    }

    //if quantity is more than one, return the cartItems with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id 
        ? {...cartItem, quantity:cartItem.quantity - 1}
        : cartItem
    )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount};

    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}