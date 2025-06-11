import { createContext, useState,useEffect } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider=(props)=>{
    const currency = '$';
    const delivery_free=10
    const [cartitem,setCartitem]=useState({});
    
    const AddtoCart=async (itemid,size)=>{
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
    }
    useEffect(() => {
      
    
       console.log(cartitem);
       
    }, [cartitem])
    

    const value={
      products  , currency ,delivery_free,
      cartitem,AddtoCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

