import React, {Component} from 'react';
import RoomJoinPage from './RoomJoinPage'
import CreatetRoomPage from './CreateRoomPage'
import { 
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Room from './Room';

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return <Router>
            <Switch>
                <Route exact path='/'> <p>This is the home page</p></Route>
                <Route path='/join'component={RoomJoinPage}></Route>
                <Route path='/create'component={CreatetRoomPage}></Route>
                <Route path="/room/:roomCode"component={Room}></Route>
            </Switch>
        </Router>
    }
};