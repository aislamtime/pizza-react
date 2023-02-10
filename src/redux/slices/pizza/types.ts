export type PizzaType = {
  id: string
  title: string
  imageUrl: string
  price: number
  types: number[]
  sizes: number[]
}
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export type PizzaStateType = {
  items: PizzaType[]
  status: Status
}
