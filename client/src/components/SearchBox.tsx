import React from 'react'; 
import { RouteComponentProps, withRouter } from 'react-router-dom';
import '../App.scss'

interface State {
  search: string
}

class SearchBox extends React.Component<RouteComponentProps,State> {

  public state: State = {
    search: ''
  }

  private onSearchItems = () => {
    if(this.state.search.length > 0){
      this.props.history.push('/items?search=' + this.state.search)
    }
  }

  private _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      console.log('ásdasdasasd')
      this.onSearchItems();
    }
  }

  public onChangeSearch = (e: any) => this.setState({ search: e.currentTarget.value })

  public render(){
    return (
      <div className='main_header'> 
        <div className='content'> 
          <div className='box'> 
            <input onKeyDown={this._handleKeyDown} onChange={this.onChangeSearch} value={this.state.search} placeholder='Nunca dejes de buscar'/> 
            <span onClick={this.onSearchItems} />
        </div> 
      </div> 
    </div>
    )
  }

}
export default withRouter(SearchBox)
