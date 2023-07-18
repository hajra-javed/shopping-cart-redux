import style from './Shop.module.css';
import t_data from '../../data.json';
import Item from '../Item/Item';
import { useEffect, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

function Shop(props) {
    const data = JSON.parse(JSON.stringify(t_data));
    const ctx = useContext(CartContext);

    useEffect(() => {
        props.initiated('shop');
    });

    function checkQuantity(id){
        const itemIndex = ctx.items.findIndex((item) => item.key === id);
        if (itemIndex !== -1){
            return ctx.items[itemIndex].quantity;
        } else {
            return 0;
        };
    };

    return (
        <div className={style.container}>
            <div className={`${style.shop} ${props.className}`}>
                {data.map((item, index) => {
                    const quantity = checkQuantity(item.id);
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            path={item.path}
                            quantity={quantity} />
                    )
                })}
            </div>
            <Outlet />
        </div>
    )
};

export default memo(Shop);