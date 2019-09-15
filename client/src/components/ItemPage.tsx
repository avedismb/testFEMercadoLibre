import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Categories } from './Categories';
import SearchBox from './SearchBox';

interface Params {
  id: string
}

interface State {
  itemResponse: any
}

class ItemPage extends React.Component<RouteComponentProps<Params>,State> {


  public state: State = {
    itemResponse: ''
  }

  public componentWillMount (){
    console.log('ÇWM')
    const id = this.props.match.params.id
    fetch('http://localhost:8000/api/items/'+ id, 
      { method: 'get', 
      headers: new Headers({ 
        'Content-Type': 'application/json', 
        "Access-Control-Allow-Origin" : "*", }), 
      }) 
      .then(response => response.json()) 
      .then(itemResponse => { 
        this.setState({ itemResponse }) 
      });
  }

  public render(){
    const categories = ['Electronica, audio y video','iPod','Reproductorees','32GB']
    const { itemResponse } = this.state
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
              <div className='price'>$ {itemResponse.price.amount}<span>{itemResponse.price.decimals === 0 ? '00' : itemResponse.price.decimals < 10 ? '0'+itemResponse.price.decimals : itemResponse.price.decimals}</span> </div>
              <button>Comprar</button>
            </div>
          </div>}
        </div>
      </div>
    )
  }

}

export default ItemPage