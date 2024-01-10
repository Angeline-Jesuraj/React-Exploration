import {  SET_PRODUCT_LIST} from './constant'

export const productData = (data = [], action) => {
    console.log("Reducer called")
  switch (action.type) {
      case SET_PRODUCT_LIST:
      console.warn('Product list called', action)
      return [...action.data]
    default:
      return data
  }
}
