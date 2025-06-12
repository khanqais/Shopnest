
import { toast } from "react-toastify";
import { products } from "../assets/assets";
import { createContext, useState,useEffect } from "react";
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
    
    const value={
      products  , currency ,delivery_free,cartitem,AddtoCart,getCartCount
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

