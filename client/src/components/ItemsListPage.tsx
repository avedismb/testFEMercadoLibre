import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchBox from './SearchBox';
import { Categories }  from './Categories';

interface Params {
  search: string
}

class ItemListPage extends React.Component<RouteComponentProps<Params>> {

  private onClickItem = () => {
    this.props.history.push('/items/3')
  }

  public componentWillMount (){
    const params = new URLSearchParams(this.props.location.search); 
    console.log(params.get('search'))
  }

  public render(){
    const categories = ['Electronica, audio y video','iPod','Reproductorees','32GB']
    // const categories = list.slice(0,list.length-1).join('  >  ') + '  >  ' 
    const item = {
      price: 1980,
      location: 'Capital Federal',
      description: 'Apple Ipod Touch 5g 15gb Negro Igual a Nuevo',
      imageUrl: 'https://www.vbout.com/images/persona/buyer-persona-image1.png'
    }
    const items = [item,item,item,item]
    return (
      <div>
          <SearchBox />
          <div className='main_items_list_page'>
            <Categories categories={categories}/>
            <div className='items'>
            {items.map((x,idx)=> {
              return <div key={idx} className='container_item'> 
                  <div className='left'>
                    <img alt='' src={x.imageUrl} />
                  </div>
                  <div className='right'>
                    <div className='header_info'>
                      <div className='price'>$ {x.price} <span /></div>
                      <div className='location'>{x.location} </div>
                    </div>
                    <div className='description'>{x.description}</div>
                  </div>
              </div>
            })}
            </div>
          </div>
      </div>
    )
  }

}
export default ItemListPage
