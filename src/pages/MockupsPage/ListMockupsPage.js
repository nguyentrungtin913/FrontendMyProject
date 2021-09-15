import { Component } from "react";
import { connect } from 'react-redux';
import ListMockup from './../../components/mockups/ListMockup';
import MockupItem from "../../components/mockups/MockupItem";
import { actDeleteMockupRequest, actFetchMockupsRequest } from './../../actions/index';



class ListMockupsPage extends Component {

    componentDidMount() {
        this.props.fetchAllMockup();
    }

    render() {
        var { mockups } = this.props;
       
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ListMockup>{this.showMockups(mockups)}</ListMockup>
            </div>
        )
    }


    showMockups(mockups) {
        var result = null;
        if (mockups.length > 0) {
            result = mockups.map((mockup, index) => {
                return (
                    <MockupItem
                        key={index}
                        mockup={mockup}
                        index={index}
                        onDelete = {this.onDelete}
                    />
                );
            })
        }
        return result;
    }
    onDelete =(id)=>{
        this.props.deleteMockup(id);
    }
}

const mapStateToProps = (state) => {
    return {
        mockups: state.mockups
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllMockup: () => {
            dispatch(actFetchMockupsRequest())
        },
        deleteMockup: (id)=>{
            dispatch(actDeleteMockupRequest(id))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ListMockupsPage);