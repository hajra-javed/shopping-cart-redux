import style from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

function Cart(props) {

    function handleDelete(item) {
        props.deleteItem(-1 * item.quantity, item);
    };

    function getTotalAmount() {
        let amount = 0;
        props.items.forEach(item => {
            amount = amount + item.quantity * item.price;
        });
        return amount;
    };

    return (
        <>
            <div className={style.overlay}></div>
            <div className={style.cart}>
                <div className={style.heading}>Cart</div>

                <Link to='/shop'>
                    <div className={`material-symbols-outlined ${style.close}`}>
                        close
                    </div>
                </Link>
                {props.items.length ?
                    <>
                    {props.items.map((item) => {
                        return (
                        <CartItem
                            key={item.key}
                            id={item.key}
                            name={item.name}
                            price={item.price}
                            path={item.path}
                            quantity={item.quantity}
                            onDelete={handleDelete}
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