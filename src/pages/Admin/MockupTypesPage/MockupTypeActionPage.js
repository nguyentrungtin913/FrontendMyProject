//import CartList from './../../components/CartList/CartList'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddTypeMockupRequest, actEditTypeMockupRequest, actFetchTypesMockupRequest, actUpdateTypeMockupRequest } from '../../../actions';


class MockupTypeActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            newName: ""
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.editTypeMockup(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.mockupTypeEditting) {
            var { mockupTypeEditting } = nextProps;
            this.setState({
                id: mockupTypeEditting.id,
                name: mockupTypeEditting.name
            })
        }

    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }
    onSave = (e) => {
        var { id, name, newName } = this.state;
        var { history } = this.props;
        var mockupType={};
        e.preventDefault();
        if(id){
            mockupType = {
                id: id,
                name: newName
            }
            this.props.updateTypeMockup(mockupType);
        }
        else{
            mockupType = {
                id: id,
                name: name
            }
            this.props.addTypeMockup(mockupType);
        }
        
        history.goBack();
    }

    render() {
        var { id, name, newName } = this.state;
        var lable = id ? 'Old Name Mockup Type' : 'Name Mockup Type';
        var className = id ? '' : 'disable';
        return (
            <form onSubmit={this.onSave}>
                <div className="panel panel-primary mlr-10">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add Mockup Type</h3>
                    </div>
                    <div className="panel-body">

                        <p className="form-label">{lable}</p>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            name="name"
                            onChange={this.onChange}  
                        />

                        <div className={className}>
                            <p className="form-label">New Name Mockup Type</p>
                            <input
                                type="text"
                                className="form-control"
                                value={newName}
                                name="newName"
                                onChange={this.onChange}
                            />
                        </div>
                        <Link to="/mockup-types" className="btn btn-lg btn-warning mr-10">Back</Link>
                        <button type="submit" className="btn btn-lg btn-primary">Save</button>

                    </div>
                </div>
            </form>
        );
    }
    showMockupTypes(mockupTypes) {
        var result = null;
        if (mockupTypes.length > 0) {
            result = mockupTypes.map((type, index) => {
                return (
                    <option key={index} value={type.id}>{type.name}</option>
                );
            })
        }
        return result;
    }
}


const mapStateToProps = (state) => {
    return {
        mockupTypes: state.mockupTypes,
        mockupTypeEditting: state.mockupTypeEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getTypesMockup: () => {
            dispatch(actFetchTypesMockupRequest())
        },
        addTypeMockup: (mockupType) => {
            dispatch(actAddTypeMockupRequest(mockupType))
        },
        editTypeMockup: (id) => {
            dispatch(actEditTypeMockupRequest(id))
        },
        updateTypeMockup: (mockupType)=>{
            dispatch(actUpdateTypeMockupRequest(mockupType))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MockupTypeActionPage);