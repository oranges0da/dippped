import { ProductType } from "./types"

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state, {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ]
    case 'DELETE_PRODUCT':
      return [
        ...state.filter(product => product.id !== action.payload.id)
      ]
    default:
      return state
  }
}