import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Categories } from './Categories';
import SearchBox from './SearchBox';

interface Params {
  id: string
}

class ItemPage extends React.Component<RouteComponentProps<Params>> {

  public componentWillMount (){
    //console.log(this.props.match.params.id)
  }

  public render(){
    const categories = ['Electronica, audio y video','iPod','Reproductorees','32GB']
    return (
      <div>
        <SearchBox />
        <div className='main_item_page'>
          <Categories categories={categories}/>
          <div className='container_item'>
            <div className='left' >
              <img alt='' src={'https://www.vbout.com/images/persona/buyer-persona-image1.png'} />
              <div className='description'>
                <h1>Titulpo</h1>
                <p>Aca va una descripcion</p>
              </div>
            </div>
            <div className='right' >
              <div className='sold'>Nuefo 234 vendidos</div>
              <div className='description'>Deco Reverse Sombrero Ofxord</div>
              <div className='price'>$ 1980 </div>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ItemPage