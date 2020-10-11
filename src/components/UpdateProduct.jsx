import React from 'react';

export default class UpdateProduct extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                title: '',
                new_title: '',
                description: '',
                price: '',
                imgurl: '',
                result: '',
            };
        }
    
        handleChange = (event) => {
            this.setState({[event.target.id] : event.target.value});
        }
    
        handleSubmit = (event) => {
            this.setState({result:''});
            //fetch('https://guarded-garden-90311.herokuapp.com/register', {
            fetch("http://localhost:5000", {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'title': this.state.title,
                    'new_title': this.state.new_title,
                    'description': this.state.description,
                    'price': this.state.price,
                    'imgurl': this.state.imgurl,
                })
            }).then(response => response.json())
            .then(data => {
                if(data !== "ok") {
                    this.setState({result: data});
                    event.preventDefault();
                } else {
                    alert(data);
                    window.location.reload();
                }
            });
        }
    
        render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>{this.state.result}</h3>
                <div className="form-group">
                    <h2>Enter the Product Title you want to Edit/Update below:</h2>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title"
                        value={this.state.title} 
                        onChange={this.handleChange} 
                        placeholder="title" 
                    required/>
                </div>
                <hr/>
                <div className="form-group">
                    <label>Enter New Product Title (*Optional)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="new_title"
                        value={this.state.new_title} 
                        onChange={this.handleChange} 
                        placeholder="title" 
                    />
                </div>
                <div className="form-group">
                    <label>Enter New Desciption (*Optional)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="description" 
                        value={this.state.description} 
                        onChange={this.handleChange}
                        placeholder="description" 
                    />
                </div>
                <div className="form-group">
                    <label>Enter New Price (*Optional)</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="price" 
                        value={this.state.price} 
                        onChange={this.handleChange} 
                        placeholder="Price" 
                    />
                </div>
                <div className="form-group">
                    <label>Enter New Image URL (*Optional)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="imgurl" 
                        value={this.state.imgurl} 
                        onChange={this.handleChange} 
                        placeholder="image url" 
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}