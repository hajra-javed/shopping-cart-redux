import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import style from './CartItem.module.css';


function CartItem(props) {

    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(cartActions.decrement({change: props.quantity, item: props}));
    }

    return (
        <div className={style.item}>
            <img className={style.img} src={require('../../assets' + props.path)} alt={props.name} />
            <div className={style.details}>
                <div className={style.name}>{props.name}</div>
                <div className={style.quantity}>×{props.quantity}</div>
                <div className={style.price}>${(props.price * props.quantity).toFixed(2)}</div>
                <div className={`material-symbols-outlined ${style.delete}`} onClick={handleDelete} >delete</div>
            </div>

        </div>
    )
};

export default CartItem;