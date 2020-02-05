import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        }
    }
    render() {
        return (
            <div>
                <h1>The best calculator ever</h1>
                <input 
                    type="number"
                    value={this.state.num1} 
                    onChange={(event) => { 
                        this._updateNumber('num1', event.target.value)}  }  
                    />  
                <input 
                    type="number"
                    value={this.state.num2} 
      
            />       
            <br></br>
            <br></br>
            <button>+</button>
            <button>-</button>
            <button>/</button>
            <button>*</button>
            <div></div>
            </div>
        );

    }

    _updateNumber = (key, newNumber) => {
        this.setState({
            [key]: newNumber

        });
    }


}

export default Calculator;