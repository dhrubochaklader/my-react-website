import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Artist.css';

const Artist = (props) => {
    const {img,name,role,age,country,salary} = props.expert;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='shape'>
            <h1>Name : {name}</h1>
            <img src={img} alt="" />
            <h2>Role: {role}</h2>
            <h3>Age : {age}</h3>
            <h4>Country : {country}</h4>
            <h5>Salary : {salary}</h5>
            <button onClick={() => props.handleBtn(props.expert)}>{element} Add</button>
        </div>
    );
};

export default Artist;