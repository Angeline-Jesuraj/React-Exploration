import React from 'react'
import {addToCart,removeToCart,emptyToCart } from './action'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import Header from './Header';
import './Header.css'
import { productList } from './ProductAction';
export default function ReduxEg() {

    const dispatch=useDispatch();
    let data=useSelector((state)=>state)
    console.log("Data in main com",data.productData)
const product ={
    name:"samsung S23 Ultra",
    category:"mobile",
    price:10000,
    color:"purple"
}
  return (
    <div>
       
        <button onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
        <button onClick={()=>dispatch(removeToCart(product.name))}>Remove From Cart</button>
        <button onClick={()=>dispatch(emptyToCart(product))}>Empty Cart</button>
        <button onClick={()=>dispatch(productList())}>Call Product List</button>

    </div>
  )
}
