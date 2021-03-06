export type Item = { 
  id: string 
  title: string 
  picture: string 
  condition: string 
  free_shipping: boolean 
  price: Price
}

export interface ItemDetail extends Item {
  sold_quantity: string
  description: string
}

export interface ItemDetailList extends Item {
  state_name: string
}

export type Price = { 
  currency: string 
  amount: number 
  decimals: number
}

export type Author = { 
  name: string 
  lastName: string
}

export type getItemsResponse = { 
  author: Author 
  categories: string[] 
  items: ItemDetailList[]
}

export type getItemDetailResponse = ItemDetail
