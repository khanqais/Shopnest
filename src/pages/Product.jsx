import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { assets, products } from '../assets/assets';
import { useState,useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import NavBar from "../components/Navbar"
import "./Product.css"
import RelatedProduct from '../components/RelatedProduct';
import { ShopContext } from '../context/ShopContext';
const Product = () => {
  const {productId}=useParams();
  const [productData,setProductData]=useState(null);
  const [image,setimage]=useState('');
  const [size,SetSize]=useState('');
  const {AddtoCart} =useContext(ShopContext)
  const fetchProductData= async ()=>{
    products.map((item)=>{
      if(item._id===productId)
      {
        setProductData(item);
        setimage(item.image[0])
        return null;
      }
    })
  }
   useEffect(() => {
     fetchProductData();
   
     
   }, [productId])
   
  return productData ? (
     <>
     <NavBar/>
     
     <div className="product-container">
  {/* Left Column */}
  <div style={{ display: 'flex' }}>
    <div className="thumbnail-section">
      {productData.image.map((item, index) => (
        <img
          onClick={() => setimage(item)}
          src={item}
          key={index}
          className="thumbnail"
          alt=""
        />
      ))}
    </div>
    <div className="main-image-container">
      <img className="main-image" src={image} alt="" />
    </div>
  </div>

  <div className="text_9">  
    <div className="title_2">{productData.name}</div>
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <img src={assets.star_icon} key={i} alt="star" />
      ))}
      <span style={{ marginLeft: 8 }}>(122)</span>
    </div>
    <div className="price">${productData.price}</div>
    <div className="description">{productData.description}</div>
    <div className='flex flex-col gap-4 '>
      <h1>Select Size</h1>
      <div className='flex gap-2'>
        {productData.sizes.map((item,index)=>(
          <button onClick={()=>SetSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
        ))}
      </div>

    </div>
    <button onClick={()=>AddtoCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>

      </div>
    </div>
    <div className='related-p'>
    <p className='related'>Related Product</p></div>
    <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    
    </>
  ) : <div></div>
}

export default Product