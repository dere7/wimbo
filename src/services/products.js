const API = "https://dummyjson.com/products?limit=10"

const productsService = {
  async fetchProducts() {
    const response = await fetch(API)
    const products = await response.json()
    return products
  },
}

export default productsService
