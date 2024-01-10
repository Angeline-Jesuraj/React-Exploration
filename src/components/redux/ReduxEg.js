import React from 'react'
import { addToCart, removeToCart, emptyToCart } from './action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Header from './Header'
import './Header.css'
import { productList } from './ProductAction'
export default function ReduxEg() {
  const dispatch = useDispatch()
  let data = useSelector((state) => state.productData)
  console.log('Data in main com', data)
  const product = {
    name: 'samsung S23 Ultra',
    category: 'mobile',
    price: 10000,
    color: 'purple',
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeToCart(product.name))}>
        Remove From Cart
      </button>
      <button onClick={() => dispatch(emptyToCart(product))}>Empty Cart</button>
      <button onClick={() => dispatch(productList())}>Call Product List</button>
      <div className='product-container'>
        {
          data.map((item,index)=>
          <div className='product-item' key={index}>
            <img src={item.photo} alt=''/>
            <div> Name:{item.name} </div>
            <div> Color:{item.color} </div>
            <div> Price:{item.price} </div>
            <div> Category:{item.category} </div>
            <div> Brand:{item.brand} </div>
            <div>
              <button>Add To Cart</button>
              <button>Remove To Cart</button>
              </div>
          </div>

          )
        }

      </div>
    </div>
  )
}
