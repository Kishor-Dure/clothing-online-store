import CartActionsType from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionsType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type:CartActionsType.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type:CartActionsType.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionsType.CLEAR_ITEM_FROM_CART,
    payload: item 
});