import CartActionsType from './cart.types';
import { addItemToCart, removeItemFromCart } from './card.utilis';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionsType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionsType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionsType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionsType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}

export default CartReducer;