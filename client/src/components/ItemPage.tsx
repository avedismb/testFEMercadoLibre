import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Params {
  id: string
}

class ItemPage extends React.Component<RouteComponentProps<Params>> {

  public componentWillMount (){
    //console.log(this.props.match.params.id)
  }

  public render(){
    return (
      <div >This is the Item Page with Product Id</div>
    )
  }

}

export default ItemPage