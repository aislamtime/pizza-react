import { CartItemType } from '../redux/slices/cartSlice'

export const calcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, item) => item.count * item.price + sum, 0)
}
