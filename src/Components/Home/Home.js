import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className='container mt-10 ml-auto p-16 mr-auto'>
            <h1 className='text-2xl text-center font-semibold'>Welcome to E-Shop</h1>

            <Products></Products>

            
        </div>
    );
};

export default Home;