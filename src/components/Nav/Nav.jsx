import style from './Nav.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav(props) {

    const tab = props.className === 'home' ? style.home : style.shop;
    const cartVisibility = props.cartVisibility === '' ? '' : style.invisible;

    const totalCount = useSelector(state => state.cartReducer.totalCount);

    return (
        <nav className={tab}>
            <ul>
                <li className={`${style.navItem}`}><Link to='shopping-cart-redux' >HOME</Link></li>
                <li className={`${style.navItem}`}><Link to='shopping-cart-redux/shop' >SHOP</Link></li>
                <li className={`${style.navItem} ${style.cart} ${cartVisibility}`} >
                    <Link to='shopping-cart-redux/shop/cart'>
                        <span className="material-symbols-outlined">shopping_basket</span>
                        {<div className={style.badge}>{totalCount}</div>}
                    </Link>
                </li>
            </ul>
        </nav >
    )
};

export default Nav;