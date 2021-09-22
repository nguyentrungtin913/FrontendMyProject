
import { Component } from 'react';
import Navbar from './navbar';
import { Route , Switch} from 'react-router';

import routes from './../../routes';
class Customer extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    {this.showContentMenu(routes)}
                </div>
            </div>
        );
    }
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            })
        }
        return <Switch>{result}</Switch>;
    }
}
export default Customer;
