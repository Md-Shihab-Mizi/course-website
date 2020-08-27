import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    const total = cart.reduce( (total, prd) => total + prd.price ,0);

// let total = 0;
// for (let i = 0; i < cart.length; i++) {
//     const product = cart[i];
//     total = total + product.price;
// }

    return (
        <div className="cart">
            <h4>Order Summery</h4>
    <p>Course Orderd : {cart.length}</p>
    <p>Total Price: {total}</p>
    <button className="purchase-btn">Purchase Now</button>
        </div>
    );
};

export default Cart;