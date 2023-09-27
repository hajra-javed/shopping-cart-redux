import style from './Shop.module.css';
import t_data from '../../data.json';
import Item from '../Item/Item';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Shop(props) {
    const data = JSON.parse(JSON.stringify(t_data));
    const items = useSelector(state => state.cartReducer.items);

    useEffect(() => {
        props.initiated('shop');
    });

    function checkQuantity(id){
        const itemIndex = items.findIndex((item) => item.key === id);
        if (itemIndex !== -1){
            return items[itemIndex].quantity;
        } else {
            return 0;
        };
    };

    return (
        <div className={style.container}>
            <div className={`${style.shop} ${props.className}`}>
                {data.map((item) => {
                    const quantity = checkQuantity(item.id);
                    console.log(quantity);
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

export default Shop;