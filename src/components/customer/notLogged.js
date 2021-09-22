
import { Component } from 'react';
import * as React from 'react';

import { Link } from 'react-router-dom';

class NotLogged extends Component {
    render() {
        return (
            <Link to = "/login" className="btn btn-success">Login</Link>
        );
    }
}
export default NotLogged;
