import React, { Component } from 'react';
import '../App.css';
import { createAccount } from '../service/service';

class CreateWallet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            passcode: '',
            passcode2: '',
            unmatch: false,
            disable: "is-disabled"
        }
    }

    handlePasscode = (event) => {
        this.setState({ passcode: event.target.value }, () => {
            if (this.state.passcode2 !== this.state.passcode || this.state.passcode === '') {
                this.setState({ unmatch: true, disable: "is-disabled" })
            } else {
                this.setState({ unmatch: false, disable: 'is-success' })
            }
        })
    }

    handlePasscode2 = (event) => {
        this.setState({ passcode2: event.target.value }, () => {
            if (this.state.passcode2 !== this.state.passcode || this.state.passcode === '') {
                this.setState({ unmatch: true, disable: "is-disabled" })
            } else {
                this.setState({ unmatch: false, disable: 'is-success' })
            }
        });
    }

    handleSubmit = (event) => {
        
        try {
            createAccount().then((value) => {
                localStorage.setItem('passcode', this.state.passcode);
                localStorage.setItem('address', value.address);
                localStorage.setItem('privatekey', value.privateKey);
                
                // console.log('Passcode: ' + this.state.passcode);
                // console.log('Address: ' + value.address);
                // console.log('PrivateKey: ' + value.privateKey);
            })
            this.props.history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
        event.preventDefault();
    }

    render() {
        return (
            <div id="main">

                <a onClick={() => this.props.history.push("")}><img alt="Home" style={{ imageRendering: 'pixelated' }} src={require('../img/house-black-silhouette-without-door.png')} /></a>

                <h2 className="create">Create Wallet</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='nes-field is-inline'>
                        <label for="inline_field">
                            Local Passcode
                    <input type="password" value={this.state.passcode} onChange={this.handlePasscode} id="inline_field" className="nes-input is-success" placeholder="Local passcode" />
                        </label>
                    </div>

                    <div className='nes-field is-inline'>
                        <label for="inline_field">
                            Confirm Local Passcode
                    <input type="password" value={this.state.passcode2} onChange={this.handlePasscode2} id="inline_field" className="nes-input is-success" placeholder="Local passcode" />
                            {this.state.unmatch &&
                                <span class="nes-text is-error">unmatched</span>
                            }
                        </label>
                    </div>
                    <button type="submit" class={`nes-btn ${this.state.disable}`}>Create wallet</button>
                </form>
            </div>
        )
    }
}

export default CreateWallet;