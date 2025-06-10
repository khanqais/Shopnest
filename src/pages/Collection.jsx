import React, { useState } from 'react'
import SideBar from '../SideBar/SideBAr'
import Collection_product from '../components/Collection_product'
import { products } from '../assets/assets'
import ProductItem from '../components/ProductItem'
import Navbar from '../components/Navbar'
import "../components/collection.css"
import Title from '../components/Title'
const Collection = () => {
  const [query,setquery]=useState("");
  const [selected,Setselected]=useState("");
  const handleInput=(event)=>{
    setquery(event.target.value);
  }
  const filtereditem= products.filter(
     (product)=> product.name.toLowerCase().indexOf(query.toLowerCase())!== -1
  );
  function filtereddata(products,selected,query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filtereditem;
    }
    return filteredProducts.map(
      ({ _id,image,name,price }) => (
        <ProductItem
          key={_id}
          id={_id}
          image={image[0]}
          name={name}
          price={price}
        />
      )
    );
  }
  const result = filtereddata(products,selected,query);
  
  return (
    <div>
      <Navbar query={query} handleInput={handleInput}/>
      <Title/>
      <div className="collection-wrapper">
        <div className="filter">
          <div style={{marginLeft:"30px", fontSize:'20px',fontWeight:"lighter"}}>Filter</div>
          <SideBar/>
        </div>
        <Collection_product result={result} />
      </div> 

     <SideBar />
    </div>
  )
}

export default Collection