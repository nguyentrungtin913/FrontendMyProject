
import { Component } from 'react';
import Rating from '@mui/material/Rating';

class NotFoundPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            'half-rating-read' : 1
        }
    }
    onChange=(e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        this.componentWillReceiveProps()
        console.log(value)
    }
    componentWillReceiveProps(){

    }
    render() {
        var {value} = this.state;
        return (
            <div className="container">
                 <Rating 
                    name="half-rating-read" 
                    defaultValue={2.5} 
                    precision={0.5} 
                    value={value}
                    onChange={this.onChange}
                />
            </div>

        );
    }
}

export default NotFoundPage;
