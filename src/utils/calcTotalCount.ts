import { CartItemType } from '../redux/slices/cartSlice'

export const calcTotalCount = (items: CartItemType[]) => {
  return items.reduce((count, item) => item.count + count, 0)
}
