import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import ListMockupPage from "./pages/Admin/MockupsPage/ListMockupsPage";
import MockupActionPage from "./pages/Admin/MockupsPage/MockupActionPage";
import ListMockupTypePage from "./pages/Admin/MockupTypesPage/ListMockupTypePage";
import MockupTypeActionPage from "./pages/Admin/MockupTypesPage/MockupTypeActionPage";


import ListCustomerMockupPage from "./pages/Customer/MockupsPage/ListMockupsPage";
import MockupCustomerActionPage from "./pages/Customer/MockupsPage/MockupActionPage";

import CartActionPage from "./pages/Customer/CartsPage/CartActionPage";
import LoginActionPage from "./pages/UsersPage/LoginActionPage"
const routes = [
    {
        path: '/login',
        exact: true,
        main: () => <LoginActionPage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartActionPage />
    },
    {
        path: '/',
        exact: true,
        main: () => <ListCustomerMockupPage />
    },
    {
        path: '/customer/mockup/:id',
        exact: false,
        main: ({ history, match }) => <MockupCustomerActionPage history={history} match={match} />
    }, 
    {
        path: '/admin/mockups',
        exact: false,
        main: () => <ListMockupPage />
    },
    {
        path: '/admin/mockup/add',
        exact: false,
        main: ({ history }) => <MockupActionPage history={history} />
    },
    {
        path: '/admin/mockup/:id/edit',
        exact: false,
        main: ({ history, match }) => <MockupActionPage history={history} match={match} />
    },
    {
        path: '/admin/mockup-types',
        exact: false,
        main: ({ history }) => <ListMockupTypePage history={history} />
    },
    {
        path: '/admin/mockup-type/add',
        exact: false,
        main: ({ history }) => <MockupTypeActionPage history={history} />
    },
    {
        path: '/admin/mockup-type/:id/edit',
        exact: false,
        main: ({ history, match }) => <MockupTypeActionPage history={history} match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
]


export default routes;