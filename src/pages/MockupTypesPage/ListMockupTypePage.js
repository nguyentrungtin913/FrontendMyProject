import { Component } from "react";
import { connect } from 'react-redux';
import { actDeleteTypeMockupRequest, actFetchTypesMockupRequest } from "../../actions";
import ListMockupType from "../../components/mockupTypes/ListMockupType";
import MockupTypeItem from "../../components/mockupTypes/MockupTypeItem";



class ListMockupTypePage extends Component {

    componentDidMount() {
        this.props.getTypesMockup();
    }
    render() {
        let { mockupTypes } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ListMockupType>{this.showMockupType(mockupTypes)}</ListMockupType>
            </div>

        )
    }

    onDelete=(id)=>{
        this.props.deleteTypeMockup(id);
    }
    showMockupType(mockupTypes) {
        var result = null;
        if (mockupTypes.length > 0) {
            result = mockupTypes.map((mockupType, index) => {
                return (
                    <MockupTypeItem
                        key={index}
                        mockupType={mockupType}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        mockupTypes: state.mockupTypes
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getTypesMockup: () => {
            dispatch(actFetchTypesMockupRequest())
        },
        deleteTypeMockup: (id) =>{
            dispatch(actDeleteTypeMockupRequest(id))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ListMockupTypePage);