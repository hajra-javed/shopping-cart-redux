import style from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

function Cart(props) {

    const ctx = useContext(CartContext);

    function getTotalAmount() {
        let amount = 0;
        ctx.items.forEach(item => {
            amount = amount + item.quantity * item.price;
        });
        return amount;
    };

    return (
        <>
            <div className={style.overlay}></div>
            <div className={style.cart}>
                <div className={style.heading}>Cart</div>

                <Link to='/shopping-cart/shop'>
                    <div className={`material-symbols-outlined ${style.close}`}>
                        close
                    </div>
                </Link>
                {ctx.items.length ?
                    <>
                    {ctx.items.map((item) => {
                        return (
                        <CartItem
                            key={item.key}
                            id={item.key}
                            name={item.name}
                            price={item.price}
                            path={item.path}
                            quantity={item.quantity}
                        />
                        )
                    })}
                        <div className={style.totalAmount}>Total Amount: ${getTotalAmount().toFixed(2)}</div>
                        <button className={style.checkout}>Checkout</button>
                    </> :
                    <div className={style.cartEmpty}>Cart is empty!</div>
                }
            </div>
        </>
    )
};

export default Cart;