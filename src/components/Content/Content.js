import React from 'react';
import LeftTree from '../LeftTree/LeftTree';
import RightTree from '../RightTree/RightTree';
import './Content.css'

class Content extends React.Component{
    constructor(){
        super();
        this.state ={
            input: '',
        };
    }

    onInputChange = (event) => {
      console.log(event.target.value);
      this.setState({input:event.target.value});
    };

    onButtonSubmit = ()=>{

    };

    render() {
        return (
            <div className='content ma0 pa0'>
                <LeftTree/>
                <RightTree onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} message={this.state.input}/>
            </div>
        );
    }
};

export default Content;