import React from 'react';
import util from '../util';

class Products extends React.Component {
    render() {
        const productItems = this.props.prodlist.map( product => (
                <div className='col-md-4' key={product.id}>
                    <div className='thumbnail text-center'>
                        <a href={`#${product.id}`} onClick={(event) => this.props.handleAddToCart(event, product)}>
                            <img 
                                src={product.img}
                                alt={product.title}
                                style={{width: "500px", height: "250px"}}
                            />
                            <p style={{color: "lightyellow"}}>{product.title}</p>
                        </a>
                        <div>
                            <b>{util.formatCurrency(product.price)}</b>
                            <button 
                                className="btn btn-primary"
                                onClick={(event) => this.props.handleAddToCart(event, product)}
                            >Add to Cart</button>
                        </div>
                    </div>
                </div>
            )
        );
        return (
            <div className='row'>
                {productItems}
            </div>
        );
    }
}

export default Products;