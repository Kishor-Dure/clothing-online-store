import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItem } from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import '../cart-dropdown/cart-dropdown.style.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'> 
            {cartItems.length ? ( 
             cartItems.map(cartItem => (
             <CartItem key ={cartItem.id} item={cartItem} />
            ))
            ) : (
                <span className='empty-message'>Your cart is Empty</span>
            )}
        </div>
        <CustomButton 
            onClick={()=> {history.push('/checkout');
            dispatch(toggleCartHidden());
            }}> 
            GO TO CHECKOUT 
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

