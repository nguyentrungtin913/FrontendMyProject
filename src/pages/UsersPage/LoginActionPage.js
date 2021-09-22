import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { actAuthenticateRequest } from '../../actions';

class LoginActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: "",
            txtPass: ""
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.userLogin) {
            var { userLogin } = nextProps;
            if(userLogin.id){
                //console.log(userLogin)
                return <Redirect to='/' />
            }

        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        //console.log(this.state)
    }
    onSave = (e) => {
        e.preventDefault();
        var { txtName, txtPass } = this.state;
        var user = {
            email: txtName,
            password: txtPass
        }
        this.props.login(user);

    }

    render() {
        var { userLogin } = this.props;
        if (userLogin) {
            if (userLogin.id) {
                //console.log(userLogin)
                //return <Redirect to='/' />
            }
        }
        return (
            <div >
                <form className="login" onSubmit={this.onSave} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="txtName"
                            id="lastname"
                            onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="txtPass"
                            onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin,
        mockups: state.mockups
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (user) => {
            dispatch(actAuthenticateRequest(user))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginActionPage);