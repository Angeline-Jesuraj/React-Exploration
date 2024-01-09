import { PRODUCT_LIST} from './constant'

export const productData = (data = [], action) => {
    console.log("Reducer called")
  switch (action.type) {
    case PRODUCT_LIST:
      console.warn('Product list called', action)
      return [action.data, ...data]
    default:
      return data
  }
}
