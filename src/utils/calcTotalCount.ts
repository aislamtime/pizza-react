import { CartItemType } from '../redux/slices/cart/slice'

export const calcTotalCount = (items: CartItemType[]) => {
  return items.reduce((count, item) => item.count + count, 0)
}
