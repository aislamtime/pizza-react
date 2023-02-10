import { CartItemType } from '../redux/slices/cart/slice'

export const calcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, item) => item.count * item.price + sum, 0)
}
