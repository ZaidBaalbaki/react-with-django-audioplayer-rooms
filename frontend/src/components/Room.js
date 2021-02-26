import React, { Component } from 'react';

export default class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            votesToSkip:2,
            guestCanPause: false,
            isHost: false,
        };
    }
    render(){
        return <div>
            <p></p>
        </div>
    }
}