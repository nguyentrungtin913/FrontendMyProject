import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Admin from './components/admin/admin';
import Customer from './components/customer/customer';
class App extends Component {

    render() {
        return (
            <Router >
                <div className="body">
                    <Customer/>
                    {/* <Admin /> */}
                </div>
            </Router>
        );
    }
}


export default App;
