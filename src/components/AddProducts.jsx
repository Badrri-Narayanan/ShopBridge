import React from 'react';

export default class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: '',
            imgurl: '',
            result: '',
        };
    }
  
    handleChange = (event) => {
        this.setState({[event.target.id] : event.target.value});
    }
  
    handleSubmit = async (event) => {
        event.preventDefault();
        fetch('https://shopbridge.herokuapp.com/', {
			method: 'post',
			headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
			body: JSON.stringify({
				'title': this.state.title,
				'description': this.state.description,
                'price': this.state.price,
                'imgurl': this.state.imgurl,
			})
		}).then(response => response.json())
		.then(data => this.setState( {result: data}, () => {
            if(data === "added") {
                alert(data);
                window.location.reload();
            }
        } ));
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h3>{this.state.result}</h3>
            <div className="form-group">
                <label>Enter Product Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title"
                    value={this.state.title} 
                    onChange={this.handleChange} 
                    placeholder="title" 
                required/>
            </div>
            <div className="form-group">
                <label>Enter Desciption</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="description" 
                    value={this.state.description} 
                    onChange={this.handleChange}
                    placeholder="description" 
                required/>
            </div>
            <div className="form-group">
                <label>Enter Price</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="price" 
                    value={this.state.price} 
                    onChange={this.handleChange} 
                    placeholder="Price" 
                required/>
            </div>
            <div className="form-group">
                <label>Enter Image URL</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="imgurl" 
                    value={this.state.imgurl} 
                    onChange={this.handleChange} 
                    placeholder="image url" 
                required/>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
  }
}