import { Component } from "react";
import { Link } from 'react-router-dom';

class ListMockupType extends Component {

    render() {
        return (
            <div>
            <Link to = "/admin/mockup-type/add" className="alert alert-primary">Add Mockup Type</Link> 
                <div className="one" >
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default ListMockupType;