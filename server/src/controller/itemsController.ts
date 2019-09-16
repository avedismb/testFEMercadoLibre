import fetch from 'node-fetch'
import { ML_SEARCH_ITEMS, author } from '../utils/constants'
import { getCategories, getItem as getItemHandler } from '../handlers/itemsHandler'
import { getItemsResponse, getItemDetailResponse } from '../utils/types'

export const getItems = (req: any,res: any) => {
  const search = req.query.q
  const url = ML_SEARCH_ITEMS + search
  return fetch(url) 
  .then(response => response.json()) 
  .then(result=>{ 
    const { results, filters } = result 
    const categories = getCategories(filters) 
    let items = results.length > 3 ? results.slice(0,4) : results
    items = items.map((x:any)=> getItemHandler(x,true)) 
    const response: getItemsResponse = { author, categories, items } 
    return res.send(response)
  })
  .catch(error => { 
    return res.send(error) 
  })
}


export const getItem = (req: any,res: any) => {
  const id = req.params.id
  const url = 'https://api.mercadolibre.com/items/'
  const finalUrl = url + id
  var item: any  = {}
  return fetch(finalUrl) 
  .then(response => response.json()) 
  .then(result=>{ 
    item = getItemHandler(result,false) 
    return fetch(url + id + '/description')
  }) 
  .then(response => response.json()) 
  .then(result=>{ 
    item.description = result.plain_text 
    return res.send(item)
  })
  .catch(error => { 
    return res.send(error) 
  })
}