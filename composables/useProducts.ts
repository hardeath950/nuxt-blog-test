
export const useProducts = () => {
  function getPrice (product: Product) {
    return product.variants[0].prices.find(p => p.currency_code === 'brl')
  }

  return { getPrice }
}
