import React, { useState } from 'react'
import InputBox from '../../components/input-box/InputBox.component'

const AddProducts = () => {
    
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        imgurl: '',
    });

    const handleChange = (event) => {
        const {value, id} = event.target;
        setProduct({
            ...product,
            [id]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://shopbridge.herokuapp.com/', {
			method: 'post',
			headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
			body: JSON.stringify({
				'title': product.title,
				'description': product.description,
                'price': product.price,
                'imgurl': product.imgurl,
			})
		}).then(response => response.json())
		.then(data => {
            alert(data);
            setProduct({
                title: '',
                description: '',
                price: '',
                imgurl: '',
            })
        });
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <InputBox 
                labelName="Enter Product Title"
                type="text" 
                className="form-control" 
                id="title"
                value={product.title} 
                onChange={(event) => handleChange(event)} 
                placeholder="Title" 
            required/>

            <InputBox
                labelName="Enter Description"
                type="text" 
                className="form-control" 
                id="description" 
                value={product.description} 
                onChange={(event) => handleChange(event)}
                placeholder="Description" 
            required/>

            <InputBox
                labelName="Enter Price"
                type="number" 
                className="form-control" 
                id="price" 
                value={product.price} 
                onChange={(event) => handleChange(event)} 
                placeholder="Price"
            required/>

            <InputBox
                labelName="Enter Image URL"
                type="text" 
                className="form-control" 
                id="imgurl" 
                value={product.imgurl} 
                onChange={(event) => handleChange(event)} 
                placeholder="Image URL" 
            required/>

            <input type="submit" value="Submit" />
        </form>
    );
    
}

export default AddProducts;