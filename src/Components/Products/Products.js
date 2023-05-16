import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = UseProducts()


  const navigation = useNavigate();

  const onDetailes = (id) =>
  {
      navigation(`/productDetails/${id}`)
  }

  return (
    <div className='container p-20 ml-auto mt-20 nb-10 '>
      <h2 className='text-2xl font-semibold text-center'>Our products</h2>


      <article className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        {
          products.map(product => <Product key={product.id} detailes = {onDetailes}  product={product}></Product>
          )
        }
      </article>


    </div>
  );
};

export default Products;