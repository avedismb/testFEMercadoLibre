import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchBox from './SearchBox';
import { Categories }  from './Categories';
import { ItemRow }  from './ItemRow';

interface Params {
  search: string
}

interface Props extends RouteComponentProps<Params> {}

interface State {
  itemsResponse: any
}

class ItemListPage extends React.Component<Props,State> {

  public state: State = {
    itemsResponse: ''
  }

  private goToItemDetail = (id: string) => () => this.props.history.push('/items/'+id)

  private getItems = () => {
    const params = new URLSearchParams(this.props.location.search); 
    fetch('http://localhost:8000/api/items?q='+ params.get('search'), 
      { method: 'get', 
      headers: new Headers({ 
        'Content-Type': 'application/json', 
        "Access-Control-Allow-Origin" : "*", }), 
      }) 
      .then(response => response.json()) 
      .then(itemsResponse => { 
        this.setState({ itemsResponse }) 
      });
  }

  public componentWillMount (){
    this.getItems()
  }

  public componentDidUpdate (oldProps: Props){
    const props = this.props
    if(props.location.search !== oldProps.location.search){
      this.getItems()
    }
  }

  public componentWillUpdate (){
    console.log('ÇWU')
  }

  public componentDidCatch (){
    console.log('ÇDC')
  }

  public render(){
    const { itemsResponse } = this.state
    return (
      <div>
          <SearchBox />
          {itemsResponse !== '' && <div className='main_items_list_page'>
            <Categories categories={itemsResponse.categories}/>
            <div className='items'>
            {itemsResponse.items.map((item: any,idx: number)=> {
              return <ItemRow key={item.id} item={item} onClick={this.goToItemDetail(item.id)}/>
            })}
            </div>
          </div>}
      </div>
    )
  }

}
export default ItemListPage
