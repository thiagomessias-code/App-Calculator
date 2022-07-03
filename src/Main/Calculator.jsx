import { Content } from "./Styles";
import React, {Component} from "react";
import Button from "../components/Button";
import Display from "../components/Display";


const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}


export default class Calculator extends Component {


  state = {...initialState}

  constructor(props) {
    super(props)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }
 
clearMemory() {
  this.setState({...initialState})
}

setOperation(operation) {
if (this.state.current === 0){
this.setState({operation,current: 1, clearDisplay:true})
}else {
  const results = operation === '='
  const currentOperation = this.state.operation

  const values = [...this.state.values]
try {
  values[0] = eval(`${values[0]}${currentOperation} ${values[1]
  }`)
  if (isNaN(values[0]) || !isFinite(values[0])) {
    this.clearMemory()
  return
  }
} catch (error) {
  values[0] = this.state.values[0]
}
  
  values[1] = 0

  this.setState({
    displayValue: values[0],
    operation: results ? null : operation,
    current: results ? 0: 1,
    clearDisplay: !results,
    values

})
}
}

addDigit(n) {
  if(n === '.' && this.state.displayValue.includes('.')) {
return
  }
  const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

  const currentValue = clearDisplay ? '' : this.state.displayValue
  const displayValue = currentValue + n
  this.setState({displayValue, clearDisplay: false})

  if(n !== '.') {
    const i = this.state.current
    const newValue = parseFloat(displayValue) 
    const values = [...this.state.values]
    values[i] = newValue
    this.setState({values})
  }
}





    render() {
      return  (
        <Content>
          <Display value={this.state.displayValue}/>
            <Button  label="AC" click={this.clearMemory } triple />
            <Button label="/" click={this.setOperation} operation/>
            <Button label="7" click={this.addDigit}/>
            <Button label="8" click={this.addDigit}/>
            <Button label="9" click={this.addDigit}/>
            <Button label="*" click={this.setOperation}operation/>
            <Button label="4" click={this.addDigit}/>
            <Button label="5" click={this.addDigit}/>
            <Button label="6" click={this.addDigit}/>
             <Button label="-" click={this.setOperation}operation/>
             <Button label="1" click={this.addDigit}/>
             <Button label="2" click={this.addDigit}/>
             <Button label="3" click={this.addDigit}/>
             <Button label="+" click={this.setOperation}operation/>
             <Button className="double" label="0" click={this.addDigit} double/>
             <Button label="." click={this.addDigit}/>
             <Button label="=" click={this.setOperation}/>
            
        </Content>
      )
    }
}



