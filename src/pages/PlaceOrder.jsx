import React, { useState } from "react";
import Delivery from "../components/Delivery";
import TotalCart from "../components/TotalCart";       
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const PlaceOrder = () => {
  const [Method,SetMethod]=useState('cod')

  return (
    <>
    <Navbar/>
    <div className="flex flex-col lg:flex-row justify-between px-8 py-6">
      
      <div className="w-full lg:w-2/3">
        <Delivery/>
      </div>
      <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
        <TotalCart/>
       <div className="mt-12">
  <p className="text-lg font-semibold mb-4">Payment Method</p>
  <div className="flex gap-3 flex-col lg:flex-row">
    {/* Stripe */}
    <div onClick={()=>SetMethod('stripe')} className="flex items-center gap-3 border p-3 px-4 rounded cursor-pointer hover:shadow-md transition">
      <div className={`min-w-3.5 h-3.5 border rounded-full  ${Method==='stripe' ? 'bg-green-400' : ''}`}></div>
      <img className="h-5 mx-2" src={assets.stripe_logo} alt="Stripe" />
    </div>

    {/* Razorpay */}
    <div onClick={()=>SetMethod('Razorpay')} className="flex items-center gap-3 border p-3 px-4 rounded cursor-pointer hover:shadow-md transition">
      <div className={`min-w-3.5 h-3.5 border rounded-full  ${Method==='Razorpay' ? 'bg-green-400' : ''}`}></div>
      <img className="h-4 mx-2" src={assets.razorpay_logo} alt="Razorpay" />
    </div>

    {/* Cash on Delivery */}
    <div onClick={()=>SetMethod('cod')} className='flex items-center gap-3 border p-3 px-4 rounded cursor-pointer hover:shadow-md transition'>
      <div className={`min-w-3.5 h-3.5 border rounded-full  ${Method==='cod' ? 'bg-green-400' : ''}`}></div>
      <p className="text-sm text-gray-600 font-medium mx-2">Cash on Delivery</p>
    </div>
  </div>
  <div className="w-full text-end mt-8">
    <button className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
  </div>
</div>

      </div>
    </div>
    </>
  );
};

export default PlaceOrder;
