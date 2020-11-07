import React, { Component } from 'react'

export class TextOutput extends Component {
    render() {
        return (
            <div>
                <textarea readOnly value={this.props.output}></textarea>
            </div>
        )
    }
}

export default TextOutput
