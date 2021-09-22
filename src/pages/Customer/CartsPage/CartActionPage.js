//import CartList from './../../components/CartList/CartList'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Types from '../../../constants/Config';

class MockupTypeActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {


    }

    onSave = (e) => {
    }
    showImage = (path) => {
        var resutl = null;
        if (path) {
            resutl = Types.API_URL + "/" + path;
        }
        return resutl;
    }

    render() {
        var {mockupRender, mockups, userLogin} = this.props;
        console.log("=============");
        console.log(mockupRender);
        console.log(userLogin);
        console.log(mockups);
        console.log("=============");
        return (

            <div className="panel panel-success auto">
                <div className="panel-heading">
                    <h3 className="panel-title">Your Image</h3>
                </div>
                <div className="panel-body " >
                    <img src={this.showImage(mockupRender)} alt="YourImage" height="400" />
                </div>
                <Link to="/customer" className="btn btn-lg btn-danger mr-10">Back</Link>
                <Link to="/customer" className="btn btn-lg btn-success mr-10">Add to cart</Link>
            </div>

        );
    }

}


const mapStateToProps = (state) => {
    return {
        mockups: state.mockups,
        userLogin: state.userLogin,
        mockupRender: state.mockupRender
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MockupTypeActionPage);