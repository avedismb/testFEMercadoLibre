import fetch from 'node-fetch'
import { ML_SEARC_ITEMS, author } from '../utils/constants'
import { getCategories, getItem } from '../handlers/itemsHandler'
import { getItemsResponse } from '../utils/types'

export const getItems = (req: any,res: any) => {
  const search = req.query.search
  const url = ML_SEARC_ITEMS + search
  return fetch(url) 
  .then(response => response.json()) 
  .then(result=>{ 
    const { results, filters } = result 
    const categories = getCategories(filters) 
    let items = results.slice(0,4).map((x:any)=> getItem(x)) 
    const response: getItemsResponse = { author, categories, items } 
    return res.send(response)
  })
  .catch(error => { 
    return res.send(error) 
  })
}
