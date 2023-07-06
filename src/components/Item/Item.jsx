import { useState } from 'react';
import style from './Item.module.css';
import IncDecBtn from '../IncDecBtn/IncDecBtn';
import { useEffect, memo } from 'react';

function Item(props) {

    function handleAdd() {
        props.onAdd(props);   
    };

    function handleRemove() {
        props.onRemove(props);
    };

    return (
        <div className={`${style.item} ${props.className}`}>
            <img className={style.img} src={require('../../assets' + props.path)} alt={props.name} />
            <div className={style.price}>${props.price.toFixed(2)}</div>
            <div className={style.name}>{props.name}</div>
            {!props.quantity ?
                <button onClick={handleAdd}>Add to cart</button> :
                <IncDecBtn count={props.quantity} onAdd={handleAdd} onRemove={handleRemove}/>}
        </div>
    )
};

export default (Item);