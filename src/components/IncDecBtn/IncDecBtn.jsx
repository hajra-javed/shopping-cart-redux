// import { useState } from 'react';
import style from './IncDecBtn.module.css'

function IncDecBtn(props){

    return (
        <div className={style.btn}>
            <button className={style.add} onClick={props.onAdd}>+</button>
            <div className={style.count}>{props.count}</div>
            <button className={style.remove} onClick={props.onRemove}>-</button>
        </div>
    );
};

export default IncDecBtn;