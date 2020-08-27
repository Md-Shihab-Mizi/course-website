import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, id } = props.course;
    return (
        <div className="product">
            <div className="course-images">
                <img src={img} alt="" />
            </div>
            <div className="margin">
                <h2 className="course-name">{name}</h2>
                <p><small>Instructor : {seller}</small></p>
                <p>Price : ${price}</p>
                <p><FontAwesomeIcon icon={faKey} /> UNLIMITED ACCESS</p>
                <button
                    className="main-button btn btn-warning"
                    onClick={() => props.handleAddCourse(id)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
            </div>

        </div>
    );
};

export default Product;