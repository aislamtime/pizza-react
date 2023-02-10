import { CartItemType } from '../redux/slices/cart/types'

export const calcTotalCount = (items: CartItemType[]) => {
  return items.reduce((count, item) => item.count + count, 0)
}
