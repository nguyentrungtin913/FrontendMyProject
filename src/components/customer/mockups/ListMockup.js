import { Component } from "react";
class ListMockup extends Component{
    render(){
        return (
            <div>
                <div className="one">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ListMockup;