import React, { Component } from "react";

export class TextInput extends Component {
   
  
  render() {
    return (
      <div>
        <textarea
          name="input"
          onChange={this.props.onChange}
          placeholder={this.props.input}
        ></textarea>
        <div>
          <input  type="submit" value="Submit" onClick={this.props.onClick} />
        </div>
        
      </div>
    );
  }
}

export default TextInput;
