import React, { Component } from 'react';
import { uport } from '../utils/connectors.js'
import ReactCountryFlag from 'react-country-flag';

export default class App extends Component {
    state = {
        userData: null,
        avatar: null,
        name: null,
        phone: null,
        country: null,
    };
    componentDidMount() {

        // UPort and its web3 instance are defined in ./../../../util/wrappers.
        // Request uPort persona of account passed via QR
        uport.requestCredentials({
            requested: ['name', 'phone', 'country', 'avatar', 'phone'],
            notifications: true // We want this if we want to recieve credentials
        }).then((credentials) => {
            console.log(credentials);
            this.setState({
                userData: credentials,
                avatar: credentials.avatar.uri,
                name: credentials.name,
                phone: credentials.phone,
                country: credentials.country
                });
        });
    }

    render() {
        return this.state.userData ? (
            <div>
                <center>
                <img className="avatar" src={this.state.avatar} />
                <br />
                <div>
                    <p className="info">Name : {this.state.name}</p>
                    <p className="info">Phone : {this.state.phone}<ReactCountryFlag code={this.state.country} /></p>
                </div>
                </center>
            </div>
        ) : null;
    }
}
