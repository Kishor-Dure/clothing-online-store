import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I9BMjDoPDMJK2QmLYcIpQMtL3ZtXnSUA9HjUIcGGFXiwXEbxiJ33SMHEQYg7SvRJBTIAHbuKDTwFU3XSqSfzv1B00PB58usuq';
    
    const onToken= token => {
        console.log(token);
        alert('Your Payment Sucessful')
        
    }
return (
    <StripeCheckout 
        label ='Pay Now'
        name = 'KDs Clothing'
        billingAddress
        shippingAddress
        image= 'https://sendeyo.com/up/d/f3eb2117da'
        description= {`Your total is Rs. ${price}`}
        amount = {priceForStripe}
        panelLabel ='Pay Now'
        token ={onToken} 
        stripeKey= {publishableKey}
    />
); 
};

export default StripeCheckoutButton;