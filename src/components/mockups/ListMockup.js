import { Component } from "react";
import { Link } from "react-router-dom";
class ListMockup extends Component{
    render(){
        return (
            <div>
                <Link to="/mockup/add">Add mockup</Link>
                <div className="one">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ListMockup;