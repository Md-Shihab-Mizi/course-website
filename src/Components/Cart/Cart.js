import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHandshake } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <div className="cart">
            <h4>Order Summery</h4>
            <p>Course Orderd : {cart.length}</p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>Total Price: ${total}</p>
            <button
                className="purchase-btn btn btn-info"
                onClick={() => alert('Thanks for Your Order')}
            >
                <FontAwesomeIcon icon={faHandshake} /> Purchase Now
        </button>
        </div>
    );
};

export default Cart;