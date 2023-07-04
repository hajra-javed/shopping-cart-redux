import style from './Shop.module.css';
import t_data from '../../data.json';
import Item from '../Item/Item';
// import uniqid from 'uniqid';
import { useEffect, memo } from 'react';

function Shop(props) {
    const data = JSON.parse(JSON.stringify(t_data));

    useEffect(() => {
        props.initiated('shop');
    });

    function handleAdd(item){
        props.updateCart(1, item);
    };

    function handleRemove(item){
        props.updateCart(-1, item);
    }

    return (
        <div className={`${style.shop} ${props.className}`}>
            {data.map(item =>
                <Item key={item.id} id={item.id} name={item.name} price={item.price} path={item.path} onAdd={handleAdd} onRemove={handleRemove}/>
            )}
        </div>
    )
};

export default memo(Shop);