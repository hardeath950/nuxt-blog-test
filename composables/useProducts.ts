
export interface GetPriceConfig {
  currency?: string,
  variant?: number
}

function getPrice (product: Product, config?: GetPriceConfig) {
  const price = product.variants[config?.variant || 0].prices.find(p => p.currency_code === (config?.currency || 'brl'))

  return price ? new Intl.NumberFormat(price?.currency_code, { style: 'currency', currency: price?.currency_code }).format(price.amount / 100) : '--'
}

export const useProducts = () => {
  return { getPrice }
}
