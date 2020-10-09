import React, { Component } from 'react';
import util from '../util';

export default class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {
                    (cartItems.length === 0)?
                        "Cart is Empty"
                        :
                        <div>
                            You have {cartItems.length} products in the basket
                        </div>
                }
                {
                    cartItems.length > 0 &&
                    <div>
                        <ul>
                            {
                                cartItems.map(item =>
                                    <li key = {`${item.id}`}>
                                        <b>{item.title}</b>
                                         X {item.count} = {item.price * item.count}
                                        <button 
                                            onClick={(event) => this.props.handleRemoveFromCart(event, item)}
                                            className='btn btn-danger'
                                        >X</button>
                                    </li>
                                )
                            }
                        </ul>
                        Total:
                        {
                            util.formatCurrency(cartItems.reduce((a, c) => a + (c.price*c.count), 0))
                        }
                        <button 
                            className='btn btn-primary'
                            onClick={() => alert("Proceeding to Payment")}
                        >Check Out</button>
                    </div>
                }
            </div>
        )
    }
}
