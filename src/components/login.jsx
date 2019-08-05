import React, { Component } from 'react';
import '../App.css';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            passcode: ''
        }
    }

    componentWillMount = () => {
        this.setState({ address: localStorage.getItem('address') })
    }

    handleAddress = (event) => {
        this.setState({ address: event.target.value });
    }

    handlePasscode = (event) => {
        this.setState({ passcode: event.target.value });
    }

    handleSubmit = (event) => {
        var add = localStorage.getItem('address');
        var pass = localStorage.getItem('passcode');
        if ((this.state.address === add) && (this.state.passcode === pass)) {
            this.props.history.push('/dashboard')
        } else {
            alert('Invalid Credentials')
        }
        // event.preventDefault();
    }

    render() {
        return (
            <div id="main">

                <a onClick={() => this.props.history.push("")}><img style={{ imageRendering: 'pixelated' }} src={require('../img/house-black-silhouette-without-door.png')} alt="Home"/></a>

                <h2 className="login">Login</h2>
                <form onSubmit={this.handleSubmit}>

                    <div className='nes-field is-inline'>
                        <label for="warning_field">
                            Wallet Address
                    <input type="text" value={this.state.address} onChange={this.handleAddress} id="warning_field" className="nes-input is-warning" placeholder="Wallet address" />
                        </label>
                    </div>

                    <div className='nes-field is-inline'>
                        <label for="warning_field">
                            Local Passcode
                    <input type="password" value={this.state.passcode} onChange={this.handlePasscode} id="warning_field" className="nes-input is-warning" placeholder="Local passcode" />
                        </label>
                    </div>

                    <button type="submit" class="nes-btn is-primary">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;