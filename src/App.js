import React, { Component } from 'react';
import './App.css';
import Splash from './components/splash';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    console.log('props',this.props)
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1500)
  }

  render() {
    if (this.state.loading) {
      return (
        <Splash />
      )
    }
    else {
      return (
        <div id="main">
              <h1>Arcade Wallet</h1>
              <button type="button" class="nes-btn is-primary" onClick={()=>this.props.history.push('/login')}>Login</button>
              <button type="button" class="nes-btn is-success" onClick={()=>this.props.history.push('/createwallet')}>Create Wallet</button>
              <button type="button" class="nes-btn is-warning" onClick={()=>this.props.history.push('/restorewallet')}>Restore Wallet</button>
        </div>
      )
    }
  }
}

export default App;
