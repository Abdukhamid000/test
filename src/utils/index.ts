export function discountedPrice(originalPrice: number, discountPercentage: number) {
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100
  return discountedPrice.toFixed(2)
}

export function calculateFullStars(rating: number) {
  return Math.floor(rating)
}

export function calculateEmptyStars(rating: number, maxStars = 5) {
  return maxStars - Math.ceil(rating)
}
