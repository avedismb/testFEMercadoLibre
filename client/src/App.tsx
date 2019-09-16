import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import SearchBox from './components/SearchBox';
import ItemListPage from './components/ItemsListPage';
import ItemPage from './components/ItemPage';
import * as ROUTES from './helpers/routes';

const App = (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.ITEMS_LIST} component={ItemListPage} />
      <Route exact path={ROUTES.ITEM_PAGE} component={ItemPage} />
      <Route exact path={ROUTES.SEARCH_BOX}component={SearchBox} />
      <Route path="*" render={() => <Redirect to={ROUTES.SEARCH_BOX} />}/>
    </Switch>
  </BrowserRouter>
)

export default App;
