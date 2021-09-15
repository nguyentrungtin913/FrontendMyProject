
import { Component } from 'react';
import { Route, Switch } from 'react-router';
import Menu from './../menus/menus';
import routes from './../../routes';

class Admin extends Component {
    render() {
        return (
            <div className="wrapper full-screen">
                <nav
                    className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" data-widget="pushmenu"
                            href="\#" role="button"><i className="fas fa-bars"></i></a></li>
                    </ul>
                </nav>

                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="\#" className="brand-link"> <img src="" alt=""
                        className="brand-image img-circle elevation-3" />
                        <span className="brand-text font-weight-light">Admin</span>
                    </a>
                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img
                                    src="" alt=""
                                    className="img-circle elevation-2" />
                            </div>
                            <div className="info">
                                <a href="/#" className="d-block"> Tín
                                </a>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar ">
                                <Menu />
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="content-wrapper" >
                    <div className="tab-content screen">
                        {this.showContentMenu(routes)}
                    </div>
                </div>
                <aside className="control-sidebar control-sidebar-dark"></aside>
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
export default Admin;
