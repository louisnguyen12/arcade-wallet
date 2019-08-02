import React, { Component } from 'react';
import '../App.css';


class RestoreWallet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backup: '',
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
        var back = localStorage.getItem('backupcode');
        var pass = localStorage.getItem('password');
        if ((this.state.backup === back) && (this.state.passcode === pass)) {
            this.props.history.push('/dashboard')
            alert('Wallet Restored')
        } else {
            alert('Invalid Backup Code')
        }
        event.preventDefault();
    }

    render() {
        return (
            <div id="main">

                <a onClick={() => this.props.history.push("")}><img style={{ imageRendering: 'pixelated' }} src={require('../img/house-black-silhouette-without-door.png')} /></a>

                <h2 className="restore">Restore Wallet</h2>

                <label>
                    <input type="radio" class="nes-radio" name="answer" checked onClick={() => this.props.history.push('/restorewallet')} />
                    <span>Backup Code</span>
                </label>

                <label>
                    <input type="radio" class="nes-radio" name="answer" onClick={() => this.props.history.push('/restorewallet2')} />
                    <span>Private Key</span>
                </label>

                <form onSubmit={this.handleSubmit}>
                    <div className='nes-field is-inline'>
                        <label for="warning_field">
                            Backup Code
                    <input type="text" value={this.state.backup} onChange={this.handlePasscode} id="warning_field" className="nes-input is-warning" placeholder="Backup code" />
                        </label>
                    </div>

                    <div className='nes-field is-inline'>
                        <label for="warning_field">
                            Local Passcode
                    <input type="password" value={this.state.passcode} onChange={this.handlePasscode} id="warning_field" className="nes-input is-warning" placeholder="Local passcode" />
                        </label>
                    </div>

                    <div className='nes-field is-inline'>
                        <label for="warning_field">
                            Confirm Local Passcode
                    <input type="password" value={this.state.passcode2} onChange={this.handlePasscode2} id="warning_field" className="nes-input is-warning" placeholder="Local passcode" />
                            {this.state.unmatch &&
                                <span class="nes-text is-error">unmatched</span>
                            }
                        </label>
                    </div>
                    <button type="submit" class={`nes-btn ${this.state.disable}`}>Restore wallet</button>
                </form>
            </div>
        )
    }
}

export default RestoreWallet;