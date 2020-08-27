import React from 'react';
import fakeData from '../../fakeData/course';
import { useState } from 'react';
import './Course.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Course = () => {
    const first15 = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([])
    const handleAddCourse = (id) => {
        const results = fakeData.find((course) => course.id === id)
        const newCart = [...cart, results];
        setCart(newCart);
    }
    return (
        <div className="course-container">
            <div className="diffrent-course-container">
                <h1>If You Want You Can Buy This Course</h1>

                {
                    courses.map(course => <Product
                        handleAddCourse={handleAddCourse}
                        course={course}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Course;