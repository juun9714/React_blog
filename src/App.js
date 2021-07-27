import React, { Component } from 'react';
import './public/css/App.css';
import Logo from './component/Logo'
import Main from './component/Main'
import TOC from './component/TOC'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: 0,
      host: '',
    }
  }

  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <div className="content">
          <TOC onClick={function (id) {
            this.setState({
              date: id
            })
          }.bind(this)}></TOC>
          <div className="mainContent">
            <Main date={this.state.date}></Main>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
