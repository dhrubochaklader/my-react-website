import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const total = cart.reduce((previous,current) => previous + current.salary,0 );
    const addName = cart.map(carts => carts.name);
    return (
        <div className='cart-style'>
           <h1>Total Added : {cart.length}</h1> 
           <h2>Total : $ {total}</h2>
           <h3>Name : {addName+''}</h3>
        </div>
    );
};

export default Cart;