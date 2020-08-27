import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    // console.log(props);
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
                <button
                 className="main-button"
                 onClick={() =>props.handleAddCourse(id)}
                 >
                     <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
            </div>

        </div>
    );
};

export default Product;