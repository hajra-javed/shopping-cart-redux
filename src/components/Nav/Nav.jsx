import style from './Nav.module.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Nav(props) {

    const tab = props.className === 'home' ? style.home : style.shop;
    const cartVisibility = props.cartVisibility === '' ? '' : style.invisible;

    return (
        <nav className={tab}>
            <ul>
                <li className={`${style.navItem}`}><Link to='' >HOME</Link></li>
                <li className={`${style.navItem}`}><Link to='/shop' >SHOP</Link></li>
                <li className={`${style.navItem} ${style.cart} ${cartVisibility}`} >
                    <Link to='/shop/cart'>
                        <span className="material-symbols-outlined">shopping_basket</span>
                        {<div className={style.badge}>{props.totalCount}</div>}
                    </Link>
                </li>
            </ul>
        </nav >
    )
};

export default Nav;