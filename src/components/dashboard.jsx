import React, { Component } from 'react';
import '../App.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div id="dashboard">
                <h2>Dashboard</h2>
                <div className="sidenav nes-container is-rounded">
                    <p>bla bla</p>
                </div>
                <div className="mainnav nes-container">
                    <p>bla bla</p>
                </div>
            </div>
        )
    }
}

export default Dashboard;