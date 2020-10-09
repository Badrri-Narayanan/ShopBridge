import React from 'react'

export default class Filter extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-3'>
                    {`${this.props.count} products found`}
                </div>
                <div className='col-md-3'>
                    <label htmlFor="">
                        Order By:
                        <select 
                            className='form-control' 
                            value={this.props.type}
                            onChange={(event) => this.props.handleSort(event)}
                        >
                            <option value="">Select</option>
                            <option value="lowest">lowest to highest</option>
                            <option value="highest">highest to lowest</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
