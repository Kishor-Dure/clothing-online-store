import CartActionsType from './cart.types';
import {addItemToCart} from './card.utilis';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case CartActionsType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case CartActionsType.ADD_ITEM:
                return{
                    ...state,
                    cartItems:addItemToCart(state.cartItems, action.payload)
                };
            default:
                return state;
    }
}

export default CartReducer;