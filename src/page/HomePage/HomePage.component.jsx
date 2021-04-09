import React from 'react'
import Products from '../../components/products/Products.component'

import './HomePage.styles.css'

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
          filteredProduct : [],
          sort: '',
        }
      }
      handleSort = (event) => {
        this.setState({sort: event.target.value});
        this.filterList();
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
    render() {
        return (
            <div className="homepage">
                <Products
                    isButtonDisabled={this.state.isButtonDisabled} 
                />
            </div>
        );
    }
}

export default HomePage;