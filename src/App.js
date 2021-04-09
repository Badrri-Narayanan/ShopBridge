import React from 'react';
import './App.css';
import {Route} from 'react-router'

import HomePage from './page/HomePage/HomePage.component'
import AddProducts from './page/AddProducts/AddProducts.component';
import UpdateProducts from './page/UpdateProducts/UpdateProducts.component';
import Cart from './components/Cart/Cart.component'
import Header from './components/header/Header.component';

class App extends React.Component {
  
  render() {
    return (
        <div className='container app'>
          <h1>Shop Bridge App</h1>
          <div className="app-body">
            <div className="header">
              <Header />
              <Route exact path="/shopbridge" component={HomePage} />
              <Route exact path="/shopbridge/add-products" component={AddProducts} />
              <Route exact path="/shopbridge/update-products" component={UpdateProducts} />
            </div>
            <div className="panel panel-primary cart" >
              <Cart />
            </div>
          </div>
         </div> 
    );
  }
}

export default App;