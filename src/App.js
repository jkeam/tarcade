import React from 'react';
import './App.css';
import FirstScreen from './components/FirstScreen'
import Browser from './components/Browser'




class App extends React.Component {
  constructor(){
    super()
    this.state = {
      browser: false,
    }
  }

enterBrowser = (e) => {
  this.setState({
    browser: true
  })
}

componentDidUpdate(){
  console.log(this.state)
}




  render(){
    return (
      <div className="App">
        {this.state.browser? <Browser></Browser> : <FirstScreen enterBrowser={this.enterBrowser}></FirstScreen>}
      </div>
    );
  }
}

export default App;
