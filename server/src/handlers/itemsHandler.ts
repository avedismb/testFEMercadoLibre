import { Price, Item, ItemDetail, ItemDetailList } from "../utils/types"

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

export const getItem = (item: any, onListPage: boolean) => { 
  const { id, title, condition, shipping, price, currency_id, thumbnail, sold_quantity, address, pictures } = item 
  const amount = price.toString().split('.')[0]
  const decimals = price.toString().split('.').length > 1 ? price.toString().split('.')[1] : 0
  const itemReturn: Item = {
    id, 
    title, 
    condition, 
    free_shipping: shipping.free_shipping, 
    price: { 
      currency: currency_id, 
      amount, 
      decimals
    } as Price 
  } as Item
  if(onListPage){
    const aux: ItemDetailList = {
      ...itemReturn,
      picture: thumbnail, 
      state_name: address.state_name
    }
    return aux
  }else{
    console.log(pictures[0])
    const aux: ItemDetail = {
      ...itemReturn,
      description: '',
      picture: pictures[0].secure_url,
      sold_quantity
    }
    return aux
  }
}
