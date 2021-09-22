
import { Component } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoggedPage from './../../pages/UsersPage/LoggedPage';
import SwipeableTemporaryDrawer from './menu';
class Navbar extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <SwipeableTemporaryDrawer />
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <LoggedPage />
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}
export default Navbar;
