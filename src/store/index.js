// import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cart-slice';


const store = configureStore({
    reducer: {
        cartReducer: cartReducer
    }
});

// const cartReducer = (state = initialState, action) => {

//     if ((action.type === 'increment') || (action.type === 'decrement')) {

//         const itemIndex = state.items.findIndex((i) => i.key === action.item.id);
//         let newItems = [...state.items];

//         if (itemIndex !== -1) {
//             if (action.change === 1 || (action.change === -1 && newItems[itemIndex].quantity > 1)) {
//                 newItems[itemIndex] = {
//                     name: action.item.name,
//                     price: action.item.price,
//                     key: action.item.id,
//                     path: action.item.path,
//                     quantity: newItems[itemIndex].quantity + action.change
//                 };
//             } else {
//                 newItems.splice(itemIndex, 1);
//             }
//         }

//         if (itemIndex === -1) {
//             newItems.push({
//                 name: action.item.name,
//                 price: action.item.price,
//                 key: action.item.id,
//                 path: action.item.path,
//                 quantity: 1
//             });
//         };

//         const newState = {
//             items: newItems,
//             totalCount: state.totalCount + action.change
//         };

//         return newState;
//     }
//     else {
//         return state;
//     }
// };

// const store = createStore(cartReducer);
export default store;