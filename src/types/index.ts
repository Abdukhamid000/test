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
