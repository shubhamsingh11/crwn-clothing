import React from'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100; //Stripe takes price in cents and we have price in $
    const publishableKey = "pk_test_51I8sYgI9DbHllb4YpkTd7OkBuPpCPni0Y0vw01TY29sIduCxz1gG6qwfmdQbVTYgNoUaKXJxS01CoJh2dJz6U0Rc009MIpvige";

const onToken= token =>
{
    console.log(token);
    alert('Payment Successful');
}

    return (
        <StripeCheckout 
            label='Pay Now'
            name= 'CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amountForStripe={priceForStripe}
            panelLabel ='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;