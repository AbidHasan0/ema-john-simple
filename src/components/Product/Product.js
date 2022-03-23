import React from 'react';
import './Product.css'

const Product = (props) => {
   const { name, img, price, ratings, seller } = props.product
   return (
      <div className='product'>
         <img src={img} alt="" />
         <div className='product-info'>
            <p className='product-name'>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Rating: {ratings} Star</p>
            <p>Seller: {seller}</p>
         </div>
         <button className='btn-cart'>
            <p>Add to Cart</p>
         </button>

      </div>
   );
};

export default Product;