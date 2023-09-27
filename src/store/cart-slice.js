import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalCount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment(state, action){
            const itemIndex = state.items.findIndex((i) => i.key === action.payload.item.id);
            if (itemIndex === -1){
                state.items.push({
                    name: action.payload.item.name,
                    price: action.payload.item.price,
                    key: action.payload.item.id,
                    path: action.payload.item.path,
                    quantity: 1
                });
            } else {
                state.items[itemIndex].quantity += action.payload.change;
            }
            state.totalCount++;

        },
        decrement(state, action){
            const itemIndex = state.items.findIndex((i) => i.key === action.payload.item.id);
            if (state.items[itemIndex].quantity === action.payload.change){
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity -= action.payload.change;
            };
            state.totalCount -= action.payload.change
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;