import React from 'react';

const Product = (props) => 
{



    const { product , detailes } = props;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.iag} alt="birds" className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product?.name}...</h2>
                <p> <b>Price :</b> ${product.price}</p>
                <div className="card-actions">
                    <button className="btn btn-detailes shadow-md" onClick={()=> detailes(product.id)}>Detailes</button>
                    <button className="btn btn-buy shadow-lg">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;