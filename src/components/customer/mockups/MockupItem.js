import { Component } from "react";
import * as Types from '../../../constants/Config';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

class MockupItem extends Component {

    showRatting = (ratting) => {
        if (ratting) {
            return (<Rating
                name="size-large"
                value={ratting}
                readOnly
            />)
        }
        return (<br />)
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
                    <Link to={`/customer/mockup/${mockup.id}`} className="btn btn-lg btn-outline-success">Render</Link>
                </div>
            </div>
        )
    }
}

export default MockupItem;