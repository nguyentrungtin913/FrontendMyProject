//import CartList from './../../components/CartList/CartList'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { actEditMockupRequest, actRenderMockupRequest } from '../../../actions';
import * as Types from '../../../constants/Config';

class MockupActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            path: "",
            id: "",
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.showMockup(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.mockupEditting) {
            var { mockupEditting } = nextProps;
            this.setState({
                id: mockupEditting.id,
                path: mockupEditting.path,
            })
        }
    }
    createImage(file) {
        let reader = new FileReader();
        
        reader.readAsDataURL(file);

    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.files[0];
        this.setState({
            [name]: value
        });

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
    onSave = (e) => {
        e.preventDefault();
        const formData = new FormData();
        var {id} = this.state;
        // Update the formData object 
        formData.append(
            "image",
            this.state.image,
            this.state.image.name
        );
        // Details of the uploaded file
        this.props.renderMockup(id, formData);
    }
    showImage = (path) => {
        var resutl = null;
        if (path) {
            resutl = Types.API_URL + "/" + path;
        }
        return resutl;
    }
    render() {
        var { path } = this.state;
        var { mockupRender }= this.props;
        if(mockupRender){
           return <Redirect to='/cart' />
        }
        return (
            <div>
                <div className="panel panel-primary" height="400" width="400" >
                    <div className="panel-heading">
                        <h3 className="panel-title">Render Mockup</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSave}>
                            <table className="table-render">
                                <tbody>
                                    <tr>
                                        <td><img src={this.showImage(path)} alt="ImageMockup" height="250" /></td>
                                        <td><img id="showImage"
                                            className="seven previewImage"
                                            alt="YourImage" height="250" /></td>
                                    </tr>
                                    <tr>
                                        <td>Mockup</td>
                                        <td>Design</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={this.onChange}
                                    accept="image/*"
                                    className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-outline-success">Render</button>
                        </form>

                    </div>
                </div>
                
            </div>
            
        );
    }
}


const mapStateToProps = (state) => {
    return {
        mockupEditting: state.mockupEditting,
        mockupRender: state.mockupRender
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        showMockup: (id) => {
            dispatch(actEditMockupRequest(id))
        },
        renderMockup: (id, image) => {
            dispatch(actRenderMockupRequest(id, image))
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MockupActionPage);

