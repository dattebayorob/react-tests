import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/button/Button';
import Display from '../components/display/Display';

export default class CalculatorComponent extends Component{
    
    clearMemory(){
        console.log('Clear');
    }

    setOperation(operation){
        console.log(operation);
    }

    addDigit(n){
        console.log(n);
    }

    render(){
        const addDigit = n => this.addDigit(n);
        const setOperation = op => this.setOperation(op);
        return (
            <div className="calculator">
                <Display value="0" />
                <Button label="AC" click={() => this.clearMemory()} triple />
                <Button label="/" operation click={setOperation}/>
                <Button label="7" click={addDigit} />
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" operation click={setOperation}/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" operation click={setOperation}/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" operation click={setOperation}/>
                <Button label="0" double />
                <Button label="." click={addDigit} />
                <Button label="=" operation />
            </div>
        );
    }
}