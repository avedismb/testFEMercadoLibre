import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

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
    return (
      <div onClick={this.onClickItem}>This is the Item List Page. If you click you will got to Item Page 3</div>
    )
  }

}
export default ItemListPage
