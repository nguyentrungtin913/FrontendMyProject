import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import IconButton from '@mui/material/IconButton';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    onLogout = () => {
        this.props.onLogout();
    }

    handleClick = (event) => {
        this.setState(
            {
                setAnchorEl: event.currentTarget,
                anchorEl: event.currentTarget
            }
        )
    };

    handleClose = () => {
        this.setState(
            {
                anchorEl: null
            }
        )
    };

    render() {
        var { anchorEl} = this.state;
        var open = Boolean(anchorEl);

        //console.log(this.state)
        return (
            <React.Fragment>
                <IconButton
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={this.handleClick}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="cart"
                    sx={{ ml: 5 }}
                >
                    <AccountCircleIcon fontSize="large" />
                </IconButton>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}>

                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.onLogout}>Logout</MenuItem>

                </Menu>
            </React.Fragment>
        );
    }
}
export default Profile;
