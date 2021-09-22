import { Component } from 'react';
import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Profile from './profile';
class Logged extends Component {
    onLogout = () => {
        this.props.onLogout();
    }
    render() {
        var { userLogin } = this.props;
        return (
            <div>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="cart"
                    sx={{ mr: 5 }}
                >
                    <ShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
                <Typography variant="h5" component="label">
                    Chào:  {userLogin ? userLogin.name : null}
                </Typography>
                <Profile  onLogout={this.onLogout} />
            </div>
        );
    }
}

export default Logged;
