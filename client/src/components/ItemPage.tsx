import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Categories } from './Categories';
import SearchBox from './SearchBox';

interface Params {
  id: string
}

interface State {
  itemResponse: any
  categories: string[]
}

class ItemPage extends React.Component<RouteComponentProps<Params>,State> {


  public state: State = {
    itemResponse: '',
    categories: []
  }

  public componentWillMount (){
    const id = this.props.match.params.id
    fetch('http://localhost:8000/api/items/'+ id, 
      { method: 'get', 
      headers: new Headers({ 
        'Content-Type': 'application/json', 
        "Access-Control-Allow-Origin" : "*", }), 
      }) 
      .then(response => response.json()) 
      .then(itemResponse => { 
        
        const categories = (this.props.location && this.props.location.state && this.props.location.state.categories)? this.props.location.state.categories : []
        this.setState({ itemResponse,categories }) 
      });
  }
  public render(){
    const { itemResponse, categories } = this.state
    return (
      <div>
        <SearchBox />
        <div className='main_item_page'>
          <Categories categories={categories}/>
          {itemResponse!== ''&& <div className='container_item'>
            <div className='left' >
              <img alt='' src={itemResponse.picture} />
              <div className='description'>
                <h1>Descripción del Producto</h1>
                <p>{itemResponse.description}</p>
              </div>
            </div>
            <div className='right' >
              <div className='sold'>{`Nuevo - ${itemResponse.sold_quantity} vendidos`}</div>
              <div className='description'>{itemResponse.title}</div>
              <div className='price'>$ {itemResponse.price.amount.toString().replace(/\d(?=(?:\d{3})+$)/g, '$&.')}<span>{itemResponse.price.decimals === 0 ? '00' : itemResponse.price.decimals < 10 ? '0'+itemResponse.price.decimals : itemResponse.price.decimals}</span> </div>
              <button>Comprar</button>
            </div>
          </div>}
        </div>
      </div>
    )
  }

}

export default ItemPage