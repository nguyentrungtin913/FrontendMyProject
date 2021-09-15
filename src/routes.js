import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ListMockupPage from "./pages/MockupsPage/ListMockupsPage";
import MockupActionPage from "./pages/MockupsPage/MockupActionPage";
import ListMockupTypePage from "./pages/MockupTypesPage/ListMockupTypePage";
import MockupTypeActionPage from "./pages/MockupTypesPage/MockupTypeActionPage";
const routes = [
    {
        path: '/mockups',
        exact: false,
        main: () => <ListMockupPage />
    },
    {
        path: '/mockup/add',
        exact: false,
        main: ({ history }) => <MockupActionPage history={history} />
    },

    {
        path: '/mockup-types',
        exact: false,
        main: ({ history }) => <ListMockupTypePage history={history} />
    },
    {
        path: '/mockup-type/add',
        exact: false,
        main: ({ history }) => <MockupTypeActionPage history={history} />
    },
    {
        path: '/mockup-type/:id/edit',
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