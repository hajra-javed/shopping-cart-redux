import style from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
    useEffect(() => {
        console.log(props.items[0]);
    });

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
                {props.items.map((item) => {
                    return CartItem(item)
                })}
            </div>
        </>
    )
};

export default Cart;