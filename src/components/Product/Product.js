import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
   const { handleAddToCart } = props;
   const { name, img, price, ratings, seller } = props.product;


   return (
      <div className='product'>
         <img src={img} alt="" />
         <div className='product-info'>
            <p className='product-name'>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Rating: {ratings} Star</p>
            <p>Seller: {seller}</p>
         </div>
         <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>

      </div>
   );
};

export default Product;