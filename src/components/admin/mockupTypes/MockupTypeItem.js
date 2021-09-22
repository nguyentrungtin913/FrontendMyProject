import { Component } from "react";
import { Link } from "react-router-dom";
class MockupTypeItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn có muốn mockup type phẩm không ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { mockupType, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{mockupType.id}</td>
                <td>{mockupType.name}</td>
                <td>
                    <Link to={`/admin/mockup-type/${mockupType.id}/edit`} className="btn btn-lg btn-warning mr-10">Edit</Link>
                    <button
                        type="button"
                        className="btn btn-lg btn-danger mr-10"
                        onClick={() => this.onDelete(mockupType.id)}
                    >Delete</button>
                </td>
            </tr>
        )
    }
}

export default MockupTypeItem;