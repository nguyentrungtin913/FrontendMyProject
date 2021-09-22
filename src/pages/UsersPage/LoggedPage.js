
import { Component } from 'react';
import * as React from 'react';

import { connect } from 'react-redux';
import Logged from '../../components/customer/logged';
import NotLogged from '../../components/customer/notLogged';
import { actLogoutRequest } from '../../actions';
class LoggedPage extends Component {
    onLogout = () => {
        this.props.logout();
    }
    showItem = (userLogin) => {
        if (userLogin) {
            if (userLogin.id) {
                return (
                    <Logged userLogin={userLogin} onLogout={this.onLogout} />
                );
            } else {
                return (
                    <NotLogged />
                );
            }
        }
        return (
            <NotLogged />
        );
    }
    render() {
        var { userLogin } = this.props;
        return (
            this.showItem(userLogin)
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => {
            dispatch(actLogoutRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedPage);
