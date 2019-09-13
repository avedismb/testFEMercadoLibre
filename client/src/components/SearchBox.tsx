import React from 'react'; 
import { RouteComponentProps } from 'react-router-dom';

class SearchBox extends React.Component<RouteComponentProps> {

  private onClickItem = () => {
    this.props.history.push('/items?search=textoplano')
  }

  public render(){
    return (
      <div onClick={this.onClickItem}>This is the Search Box. If you click you will got to Item List Page </div>
    )
  }

}
export default SearchBox
