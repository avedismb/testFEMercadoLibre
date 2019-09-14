import { Price, Item } from "../utils/types"

export const getCategories =(filters: any) => { 
  const categoryIdItem: any[] = filters.filter((x:any)=>x.id === 'category') 
  if(categoryIdItem.length === 0){ 
    return [] 
  } 
  
  const categoryIdObject = categoryIdItem[0] 
  if(categoryIdObject.values.length === 0){ 
    return [] 
  } 
  
  const values = categoryIdObject.values[0] 
  if(!values.path_from_root || values.path_from_root === []){ 
    return [] 
  } 
  
  const categories: string[] = values.path_from_root.map((x:any)=>x.name) 
  return categories
}

export const getItem = (item: any) => { 
  const { id, title, condition, shipping, price, currency_id, thumbnail, sold_quantity } = item 
  return { 
    id, 
    title, 
    condition, 
    free_shipping: shipping.free_shipping, 
    picture: thumbnail, sold_quantity, 
    price: { 
      currency: currency_id, 
      amount: price, 
      decimals: 0 
    } as Price 
  } as Item
}
