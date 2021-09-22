//import CartList from './../../components/CartList/CartList'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddMockupRequest, actEditMockupRequest, actFetchTypesMockupRequest, actUploadMockupRequest } from '../../../actions';
import * as Types from '../../../constants/Config';

class MockupActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            side: "",
            price: "",
            type: 0,
            image: "",
            path: "",
            selectedFile: null
        }
    }

    componentDidMount() {
        this.props.getTypesMockup();
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.editMockup(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.mockupEditting) {
            var { mockupEditting } = nextProps;
            this.setState({
                id: mockupEditting.id,
                name: mockupEditting.name,
                side: mockupEditting.side,
                price: mockupEditting.price,
                type: mockupEditting.typeId,
                path: mockupEditting.path,
            })
        }

    }

    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                image: e.target.result
            })
        };
        reader.readAsDataURL(file);

    }

    onChange = (e) => {

        var target = e.target;
        var name = target.name;
        var value = target.type === 'file' ? null : target.value;
        this.setState({
            [name]: value
        });

        if (target.type === 'file') {

            var files = target.files;

            this.createImage(files[0]);

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var imageType = /image.*/;
                if (!file.type.match(imageType)) {
                    continue;
                }
                var img = document.getElementById("showImage");
                img.file = file;
                var reader = new FileReader();
                reader.onload = (function (aImg) {
                    return function (e) {
                        aImg.src = e.target.result;
                    };
                })(img);
                reader.readAsDataURL(file);
            }
        }
        if (target.type === 'file') {
            this.setState({ selectedFile: target.files[0] });
        }
        //console.log(this.state)
    }
    onSave = (e) => {

        var { id, name, side, price, type, image } = this.state;
        var { history } = this.props;

        var mockup = {
            id: id,
            name: name,
            side: side,
            price: parseInt(price),
            type: parseInt(type),
            image: image,
        }
        e.preventDefault();
        if (id) {
            this.props.updateMockup(mockup);
        }
        else {
            //this.props.addMockup(mockup);
            const formData = new FormData();

            // Update the formData object 
            formData.append(
                "myFile",
                this.state.selectedFile,
                this.state.selectedFile.name
            );

            // Details of the uploaded file 
            
            this.props.addMockup(formData);
        }
        history.goBack();
    }
    showImage = (path) => {
        var resutl = null;
        if (path) {
            resutl = Types.API_URL + "/" + path;
        }
        return resutl;
    }
    render() {
        var { mockupTypes } = this.props;
        var { name, side, price, type, path } = this.state;
        return (
            <div>
                <div className="panel panel-primary mlr-10">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add Mockup</h3>
                    </div>
                    <div className="panel-body">
                        <div className="six">
                            <img id="showImage"
                                className="seven previewImage"
                                src={this.showImage(path)}
                                alt="mockup"
                            />
                        </div>
                        <form className="eight" onSubmit={this.onSave} >
                            <meta name="csrf-token" content="{{ csrf_token() }}" />
                            <div className="mb-3">
                                <label className="form-label">Name Mockup</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Side Mockup</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="side"
                                    value={side}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price Mockup</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="price"
                                    value={price}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type mockup</label>
                                <select
                                    name="type"
                                    value={type}
                                    className="form-control"
                                    onChange={this.onChange}
                                >
                                    <option value="0" >--Choose--</option>
                                    {this.showMockupTypes(mockupTypes)}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mockup</label>
                                <input

                                    type="file"
                                    name="selectedFile"
                                    onChange={this.onChange}
                                    accept="image/*"
                                    className="form-control" />
                            </div>
                            <Link to="/mockups" className="btn btn-lg btn-danger mr-10">Trở lại</Link>
                            <button type="submit" className="btn btn-lg btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
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
        mockupEditting: state.mockupEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getTypesMockup: () => {
            dispatch(actFetchTypesMockupRequest())
        },
        addMockup: (mockup) => {
            dispatch(actAddMockupRequest(mockup))
        },
        editMockup: (id) => {
            dispatch(actEditMockupRequest(id))
        },
        updateMockup: (mockup) => {
            dispatch(actUploadMockupRequest(mockup))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MockupActionPage);

