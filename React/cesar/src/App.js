import React from "react";
import "./App.css";
import TextInput from "./components/textArea/TextInput";
import TextOutput from "./components/textArea/TextOutput";
import NumberInput from "./components/buttons/NumberInput";
import Toggle from "./components/buttons/Toggle";
import Submit from "./components/buttons/Submit";
import * as Cesar from "./components/functions/Cesar"

class App extends React.Component {
  state = {
    id: "",
    input: "",
    output: "",
    date: new Date().getDate(),
    key: "",
    result: '',
    decrypt : false
  };
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
    this.setState({ decrypt : !this.state.decrypt });
      }
   onClick = (e) => {
     this.state.decrypt === false ? this.setState({'output' : Cesar.getResult(this.state['input'])}) : this.setState({'output' : Cesar.getResultDecode(this.state['input'])});
     ;

   }
  render() {
    return (
      <div className="App">
        <TextInput input="input text" onChange={this.onChange} onClick={this.onClick} />
        <NumberInput onChange={this.onChange}   />
        <TextOutput output={this.state.output} />
      </div>
    );
  }
}
export default App;
