import React from 'react';

const InputBox = ({labelName, ...otherProps}) => (
    <div className="form-group">
        <label>{labelName}</label>
        <input {...otherProps}/>
    </div>
);

export default InputBox;