import React, {Component} from "react";
import './Calculator.css'
import Button from "../Components/Button";
import Display from "../Components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values:[0,0],
    current:0
}

export default class Calculator extends Component {

    state = {...initialState}

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    clearMemory(){
        // console.log('limpar')
        this.setState({...initialState})
    }

    setOperation(oper){
        // console.log(oper)
        if(this.state.current === 0 ){
            this.setState({current: 1, clearDisplay: true, operation: oper})
        } else {
            const igual = oper === '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            try{
                // eslint-disable-next-line 
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                if(isNaN(values[0]) || !isFinite((values[0]))){
                    this.clearMemory()
                    return
                }
            }catch(e){
                values[0] = this.state.values[0]
            }
            
            values[1] = null
            // let limpa = false
            // if (values[1] === null && this.state.values[1] === null){
            //     limpa = false
            // } else if(igual){
            //     limpa = !igual

            // }
            this.setState({
                displayValue: values[0],
                operation: igual ? null : oper,
                current: igual ? 0 : 1,
                // clearDisplay: limpa,
                clearDisplay: !igual,
                values
            })
            console.log(!igual)
        }
    }

    addDigit(n){
        // console.log(n)
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay =  this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }


    render(){
        //  // eslint-disable-next-line
        // const addDigit = n => this.addDigit(n)
        //  // eslint-disable-next-line
        // const setOperation = n => this.setOperation(n)

        return(            
            <div className="Calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple/>
                {/* <Button label="AC" click={() => this.clearMemory()}/> */}
                <Button label="/" click={this.setOperation} operation/>
                {/* <Button label="7" click={addDigit}/> */}
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
                )
    }
}