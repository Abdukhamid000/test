export interface IProduct {
  id: number
  brand: string
  category: string
  description: string
  discountPercentage: string
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export interface IResponse {
  limit: number
  products: IProduct[]
  skip: number
  total: number
}

export interface IUser {
  first_name: string
  last_name: string
}

export interface IReview {
  productID: string
  user_name: string
  msg: string
  rating: number
  created_at: Date
  liked?: boolean
  disliked?: boolean
}

export type TSelectOption = string | number | Record<string, string | number>

export interface ISelect {
  modelValue?: TSelectOption
  options: TSelectOption[]
  labelKey: string
  valueKey: string
  placeholder?: string
  selectedOptionStyles: string
  optionBorder: boolean
  dark?: boolean
  error?: boolean
  disabled?: boolean
}
