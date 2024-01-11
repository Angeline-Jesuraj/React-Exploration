import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from './constant'

export const cardData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn('ADD To card consition called reducer called', action)
      return [action.data, ...data]
    case REMOVE_TO_CART:
      {console.warn('remove To card consition called reducer called', action)
      const remaingItems = data.filter((item) => item.id !== action.data)
      return [...remaingItems]}
    case EMPTY_TO_CART:
      console.warn('empty To card consition called reducer called', action)
      data = []
      return data
    default:
      return data
  }
}
