import { Author } from "./types"

// ML Endpoints
export const ML_SEARCH_ITEMS = 'https://api.mercadolibre.com/sites/MLA/search?q='
export const ML_GET_ITEM = 'https://api.mercadolibre.com/items/​'
export const ML_GET_ITEM_DESCRIPTION = 'https://api.mercadolibre.com/items/​{ID}/description'

export const AUTHOR_NAME = 'Avedis'
export const AUTHOR_LAST_NAME = 'Maroukian'

export const author: Author = { 
  name: AUTHOR_NAME, 
  lastName: AUTHOR_LAST_NAME
}

