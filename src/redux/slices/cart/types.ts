export type CartItemType = {
  id: string
  title: string
  imageUrl: string
  price: number
  type: string
  size: number
  count: number
}
export type CartSliceType = {
  totalPrice: number
  totalCount: number
  items: CartItemType[]
}
