import React from 'react';
import './App.css';
import Basket from './components/Basket';
import Filter from './components/filter';
import Products from './components/Products';
import AppProducts from './components/AddProducts';
import UpdateProduct from './components/UpdateProduct';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products : [],
      filteredProduct : [],
      sort: '',
      cartItems: [],
      navigation: 'home',
    }
  }
  handleSort = (event) => {
    this.setState({sort: event.target.value});
    this.filterList();
  }
  handleAddToCart = (event, product) => {
    this.setState(state => {
      const cartItems = this.state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if(item.id === product.id ) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if(!productAlreadyInCart) {
        cartItems.push({...product, count:1})
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }
  handleRemoveFromCart = (event, product) => {
    this.setState(state => {
      const cartItems = this.state.cartItems.filter(el => el.id !== product.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return {cartItems};
    })
  }
  filterList = () => {
    this.setState(state => {
      if(this.state.sort !== '') {
        this.state.products.sort((a,b) => 
          (this.state.sort === "lowest")?(a.price < b.price?1:-1):(a.price > b.price?1:-1)
        )
      } else {
        this.state.products.sort((a,b) => (a.id < b.id?1:-1))
      }
      return {filteredProduct : this.state.products}
    })
  }
  componentDidMount() {
    //fetch("https://shopbridge.herokuapp.com/")
    fetch("http://localhost:5000")
     .then(resp => resp.json())
     .then(prodlist => {
      this.setState({products : prodlist});
     });

    if(localStorage.getItem('cartItems')) {
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
    }
  }
  render() {
    return (
        <div className='container'>
          <h1>Shop Bridge App</h1>
          <hr/>
          <div className='row'>
            <div className='col-md-8'>
              <div className="row alert alert-info">
                <div className="col-md-4">
                  <a href="#home" onClick={() => { this.setState({navigation: 'home'}) } }>
                    <b>Home</b>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#addNew" onClick={() => { this.setState({navigation: 'addNew'}) } }>
                    <b>Add New</b>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#update" onClick={() => { this.setState({navigation: 'update'}) } }>
                    <b>Update</b>
                  </a>
                </div>
              </div>
              {
                (this.state.navigation === 'home')?
                  <div>
                    <Filter 
                      handleSort={this.handleSort}
                      count={this.state.products.length}
                    />
                    <hr/>
                    <Products 
                      prodlist = {this.state.products}
                      isButtonDisabled={this.state.isButtonDisabled}
                      handleAddToCart = {this.handleAddToCart} 
                    />
                  </div>
                  :
                  (this.state.navigation === 'addNew')?
                  <AppProducts/>
                  :
                  <UpdateProduct/>
              }

            </div>
            <div className='col-md-4'>
              <Basket 
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart} 
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;