
import { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Mockups',
        to: '/mockups',
        exact: false
    },
    {
        name: 'MockupTypes',
        to: '/mockup-types',
        exact: false
    }
]

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                //var active = match ? 'active' : '';
                return (
                    <li className= 'nav-item nav-link '>
                        <Link to={to}>
                            {lable}
                        </Link>
                    </li>
                );
            }}

        />
    )
}

class Menu extends Component {
    render() {
        return (
            <div>
                {this.showMenus(menus)}
            </div>

        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        lable={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}
export default Menu;
