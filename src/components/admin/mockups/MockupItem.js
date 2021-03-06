import { Component } from "react";
import { Link } from "react-router-dom";
import * as Types from '../../../constants/Config';
import Rating from '@mui/material/Rating';

class MockupItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn có muốn mockup phẩm không ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    showRatting = (ratting) => {
        if (ratting) {
            return (<Rating
                name="size-large"
                value={ratting}
                readOnly
            />)
        }
        return (<br/>)
    }
    render() {
        var today = new Date();
        var { mockup } = this.props;
        var path = `${Types.API_URL}/${mockup.path}?nocache=${today.getSeconds()}`;
        return (
            <div className="two">
                <a href="\#">
                    <img src={path} alt="anh" height="170" width="210" />
                </a>
                <br />
                {
                    this.showRatting(mockup.ratting)
                }

                <p>{mockup.price}đ</p>
                <div className="three" >
                    <a href="\#" className="btn btn-lg btn-outline-success mr-2">Render</a>
                    <Link to={`/admin/mockup/${mockup.id}/edit`} className="btn btn-lg btn-outline-warning mr-2">Edit</Link>
                    <button className="btn btn-lg btn-outline-danger" onClick={() => this.onDelete(mockup.id)} >Delete</button>
                </div>
            </div>
        )
    }
}

export default MockupItem;