import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { ShopContext } from '../context/ShopContext'
import "./Cart.css"

const Cart = () => {
  const {products  , currency,cartitem}=useContext(ShopContext);
  const [cartData,SetCartData]=useState([]);
  useEffect(() => {
    const tempData=[];
    for(const items in cartitem)
    {
       for(const item in cartitem[items])
       {
        tempData.push({
          _id:items,
          size:item,
          quantity:cartitem[items][item]
        })
       }
    }
    SetCartData(tempData);
    
  }, [cartitem])
  
  return (
    <div>
      <Navbar/>
      <div class="cart-heading">
      <span class="label">YOUR</span>
      <span class="cart">CART</span>
      <span class="line"></span>
      </div>

     <div className="Items">
  {
    cartData.map((item, index) => {
      const productdata = products.find((product) => product._id === item._id);
      return (
        <div key={index} className='py-4 border-b text-gray-700 flex items-center gap-4'>
          <img className='w-16 sm:w-20 rounded' src={productdata.image[0]} alt={productdata.name} />
          <div className='flex flex-col flex-1'>
            <p className='text-lg font-medium'>{productdata.name}</p>
            <div className='flex items-center gap-5 mt-2'>
              <p className='text-lg'>{currency}{productdata.price}</p>
              <p className='size-label'>{item.size}</p>
            </div>
          </div>
          <input type="number" min={1} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' defaultValue={item.quantity} />
        </div>
      )
    })
  }
</div>

    </div>
  )
}

export default Cart