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
      console.log('va')
      this.props.history.push('/items?search=' + this.state.search)
    }
  }

  public onChangeSearch = (e: any) => this.setState({ search: e.currentTarget.value })

  public render(){
    return (
      <div className='main_header'> 
        <div className='content'> 
          <div className='box'> 
            <input onChange={this.onChangeSearch} id='inputSearch' value={this.state.search} placeholder='Nunca dejes de buscar'/> 
            <span onClick={this.onSearchItems} />
        </div> 
      </div> 
    </div>
    )
  }

}
export default withRouter(SearchBox)
