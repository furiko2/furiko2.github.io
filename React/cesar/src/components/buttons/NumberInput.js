import React, { Component } from 'react'

export class NumberInput extends Component {
    render() {
        return (
            <div>
            <input name='key' type="number" min="1" max="31" id="key" placeholder="🔑" onChange={this.props.onChange}/>
            <label className="switch">
                <input name='decrypt' type="checkbox" onChange={this.props.onChange}/>
            </label>
          </div>
        )
    }
}

export default NumberInput
