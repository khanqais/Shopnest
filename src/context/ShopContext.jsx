

import { toast } from "react-toastify";
import { createContext, useState,useEffect } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider=(props)=>{
    const currency = '$';
    const delivery_free=10
    const [cartitem,setCartitem]=useState({})
    
    const AddtoCart=async (itemid,size)=>{
        if(!size)
        {
            toast.error('Select Product Size')
            return;
        }

        let CartData=structuredClone(cartitem);

        if(CartData[itemid])
        {
            if(CartData[itemid][size])  
            {
                CartData[itemid][size]+=1
            }
            else{
                CartData[itemid][size]=1;   
            }
        }
        else{
            CartData[itemid]={};
            CartData[itemid][size]=1;
        }
        setCartitem(CartData); 
       toast.success("Product is Placed")
    }

   const getCartCount=()=>{
     let totalCount=0;
     for(const items in cartitem)
     {
        for (const item in cartitem[items])
        {
            try {
                if(cartitem[items][item]>0)
                {
                    totalCount+=cartitem[items][item]
                }
            } catch (error) {
                console.log(error);
                
            }
        }
     }
     return totalCount;
   }
  const updatequantity = async (itemid, size, quantity) => {
    let CartData = structuredClone(cartitem);

    if (quantity <= 0) {
        delete CartData[itemid][size];
        if (Object.keys(CartData[itemid]).length === 0) {
            delete CartData[itemid];
        }
    } else {
        CartData[itemid][size] = quantity;
    }

    setCartitem(CartData);
};

const getCartAmount = () => {
    let totalamount = 0;

    for (const productId in cartitem) {
        let itemInfo = products.find((product) => product._id === productId);

        if (!itemInfo) continue; // safety check

        for (const size in cartitem[productId]) {
            const quantity = cartitem[productId][size];

            try {
                if (quantity > 0) {
                    totalamount += itemInfo.price * quantity;
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return totalamount;
};


    
    const value={
      products  , currency ,delivery_free,cartitem,AddtoCart,getCartCount,updatequantity,getCartAmount
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

