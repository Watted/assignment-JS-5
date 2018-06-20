import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import './App.css';
import SignIn from "./components/SignIn/SignIn";

class App extends Component {

    constructor(){
        super();
        this.state = {
            isSignedIn:false,
            route:'signin',
        }
    }

    onRouteChange = (route) => {
        if (route === 'signout'){
            this.setState({isSignedIn: false})
        }else if (route === 'home'){
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    };

  render() {
    return (
        <div className="App">
            <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
            {this.state.route === 'home'
                ?
                <Content/>
                :(
                    this.state.route === 'signin'?
                        <SignIn loadUser={this.loadUser} onRouteChang={this.onRouteChange}/>
                        :
                        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                )
            }
        </div>
    );
  }
}

export default App;
