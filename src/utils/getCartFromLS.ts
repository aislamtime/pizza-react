import { calcTotalCount } from './calcTotalCount'
import { calcTotalPrice } from './calcTotalPrice'

export const getCartFromLS = () => {
  const data = localStorage.getItem('cartItems')
  const items = data ? JSON.parse(data) : []
  const totalCount = calcTotalCount(items)
  const totalPrice = calcTotalPrice(items)

  return { items, totalPrice, totalCount }
}
