export { }

declare global {
  export interface User {
    id: string
    first_name: string
    last_name: string
    email: string
    password: string
    location: any
    title: any
    description: any
    tags: any
    avatar: any
    language: any
    theme: string
    tfa_secret: any
    status: string
    role: string
    token: any
    last_access: string
    last_page: string
    provider: string
    external_identifier: any
    auth_data: any
    email_notifications: boolean
  }

  export interface Article {
    slug: string
    status: string
    sort: any
    user_created: User
    date_created: string
    user_updated?: User
    date_updated?: string
    title: string
    content: string
    summary: string
    image: string
  }

  export interface Price {
    id: string
    created_at: string
    updated_at: string
    deleted_at: any
    currency_code: string
    amount: number
    min_quantity: any
    max_quantity: any
    price_list_id: any
    variant_id: string
    region_id: any
    price_list: any
  }

  export interface Variant {
    id: string
    created_at: string
    updated_at: string
    deleted_at: any
    title: string
    product_id: string
    sku: any
    barcode: any
    ean: any
    upc: any
    inventory_quantity: number
    allow_backorder: boolean
    manage_inventory: boolean
    hs_code: any
    origin_country: any
    mid_code: any
    material: string
    weight: any
    length: any
    height: any
    width: any
    metadata: any
    prices: Price[]
    options: any[]
    original_price: any
    calculated_price: any
    original_price_incl_tax: any
    calculated_price_incl_tax: any
    original_tax: any
    calculated_tax: any
    tax_rates: any
  }

  export interface Product {
    id: string
    title: string
    subtitle: string
    description: string
    handle: string
    is_giftcard: boolean
    status: string
    images: any[]
    thumbnail: string
    options: any[]
    variants: Variant[]
    categories: any[]
    profile_id: string
    profile: any
    weight: any
    length: any
    height: any
    width: any
    hs_code: any
    origin_country: any
    mid_code: any
    material: any
    collection_id: string
    collection: any
    type_id: string
    type: any
    tags: any[]
    discountable: boolean
    external_id: any
    sales_channels: any[]
    created_at: string
    updated_at: string
    deleted_at: string
    metadata: any
  }

}
