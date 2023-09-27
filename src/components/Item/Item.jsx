import style from './Item.module.css';
import IncDecBtn from '../IncDecBtn/IncDecBtn';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

function Item(props) {
    const dispatch = useDispatch();
    // const ctx = useContext(CartContext);

    function handleAdd() {
        dispatch(cartActions.increment({change: 1, item: props}));   
    };

    function handleRemove() {
        dispatch(cartActions.decrement({change: 1, item: props}));   
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