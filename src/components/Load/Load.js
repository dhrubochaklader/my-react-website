import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Cart from '../Cart/Cart';
import './Load.css';

const Load = () => {
    const [experts,setExperts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('./fake.json')
        .then(res => res.json())
        .then(data => {
            setExperts(data);
            // console.log(data);
        })
    },[]);

    const handleBtn = added => {
        const other = [...cart,added];
        setCart(other);
    }

    return (
        <div className='load-style'>
            <div className='boundary'>
                {
                    experts.map(expert => <Artist expert = {expert} handleBtn = {handleBtn}></Artist> )
                }
            </div>
            <div>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Load;