import React from 'react';
import Slider from './slider/Slider';
import PopularProduct from './Product/PopularProduct';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularProduct></PopularProduct>
        </div>
    );
};

export default Home;