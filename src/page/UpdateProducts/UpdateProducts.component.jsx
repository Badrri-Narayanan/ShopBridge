import React, {useState} from 'react';
import InputBox from '../../components/input-box/InputBox.component';

const UpdateProducts = () => {

    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        imgurl: '',
        new_title: '',
    });

    const handleChange = (event) => {
        const {value, id} = event.target;
        setProduct({
            ...product,
            [id]: value
        });
    }

    const checkIfProductObjectIsEmpty = () => {
        let flag = true;
        for(let key in product) {
            if(product[key] !== '' && key !=="title")
                flag = false;
        }
        return flag;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(checkIfProductObjectIsEmpty()) {
            alert("Invalid update request!\nAtleast one optional field must contain an updated value")
        } else { 
            fetch('https://shopbridge.herokuapp.com/', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        'title': product.title,
                        'new_title': product.new_title,
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
                    new_title: '',
                })
            });
        }
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <InputBox
                labelName="Enter the Product Title you want to Edit/Update below:"
                type="text" 
                className="form-control" 
                id="title"
                value={product.title} 
                onChange={(event) => handleChange(event)} 
                placeholder="title"
            required/>
            <InputBox
                labelName="Enter New Product Title (*Optional)"
                type="text" 
                className="form-control" 
                id="new_title"
                value={product.new_title} 
                onChange={(event) => handleChange(event)} 
                placeholder="new title"
            />
            <InputBox
                labelName="Enter New Desciption (*Optional)"
                type="text" 
                className="form-control" 
                id="description" 
                value={product.description} 
                onChange={(event) => handleChange(event)}
                placeholder="description" 
            />
            <InputBox
                labelName="Enter New Price (*Optional)"
                type="text" 
                className="form-control" 
                id="price" 
                value={product.price} 
                onChange={(event) => handleChange(event)} 
                placeholder="price" 
            />
            <InputBox
                labelName="Enter New Image URL (*Optional)"
                type="text" 
                className="form-control" 
                id="imgurl" 
                value={product.imgurl} 
                onChange={(event) => handleChange(event)} 
                placeholder="image url" 
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default UpdateProducts;