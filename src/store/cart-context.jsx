import React from "react";
import { useState } from "react";

const CartContext = React.createContext({
    items: [],
    totalCount: 0,
    updateCart: (change, item) => {}
});

export const CartContextProvider = (props) => {
    const [cart, setCart] = useState({ items: [], totalCount: 0 });
    const handleUpdateCart = (change, item) => {
        const itemIndex = cart.items.findIndex((i) => i.key === item.id);
        let newItems = cart.items;

        if (itemIndex !== -1) {
            if (change === 1 || (change === -1 && newItems[itemIndex].quantity > 1)) {
                newItems[itemIndex] = {
                    name: item.name,
                    price: item.price,
                    key: item.id,
                    path: item.path,
                    quantity: newItems[itemIndex].quantity + change
                };
            } else {
                newItems.splice(itemIndex, 1);
            }
        } else {
            newItems.push({
                name: item.name,
                price: item.price,
                key: item.id,
                path: item.path,
                quantity: 1
            });
        };

        setCart((cart) => (
            {
                items: newItems,
                totalCount: cart.totalCount + change
            })
        );
    };

    return (
        <CartContext.Provider value={{items: cart.items, totalCount: cart.totalCount, updateCart: handleUpdateCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;