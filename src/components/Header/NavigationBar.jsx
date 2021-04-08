import { Box, Button, makeStyles, Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

NavigationBar.propTypes = {
  mobileNavBar: PropTypes.any,
  handleClose: PropTypes.func,
};

NavigationBar.defaultProps = {
  handleClose: null,
};

const useStyles = makeStyles((theme) => ({
  navBarOnDesktop: {
    display: 'flex',
    flexFlow: 'row noWrap',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '&  button': {
      width: '100%',
      border: 'none',
      color: 'blue',
      '&': {
        textAlign: 'left',
        color: 'white',
      },
    },
  },
  navBarOnMobile: {
    position: 'absolute',
    '& button': {
      width: '100%',
      border: 'none',
    },
  },
  growMobile: {
    display: 'block',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    '&.active': {
      backgroundColor: 'red',
    },
  },
}));

export function NavigationBar({ mobileNavBar, handleClose }) {
  const classes = useStyles();

  const isOpen = Boolean(mobileNavBar);

  const handleCloseNavBar = () => {
    if (handleClose) {
      handleClose(null);
    }
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMenuOnMobile = (
    <Menu
      className={classes.navBarOnMobile}
      anchorEl={mobileNavBar}
      // anchorOrigin={{ vertical: '0', horizontal: '0' }}
      id={mobileMenuId}
      keepMounted
      // transformOrigin={{ vertical: '0', horizontal: '0' }}
      open={isOpen}
      onClose={handleCloseNavBar}
    >
      <MenuItem>
        <NavLink exact to="/" className={classes.link}>
          <Button className={classes.button} onClick={handleCloseNavBar} color="primary">
            Home
          </Button>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/products" className={classes.link}>
          <Button className={classes.button} onClick={handleCloseNavBar} color="primary">
            Products
          </Button>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/carts" className={classes.link}>
          <Button className={classes.button} onClick={handleCloseNavBar} color="primary">
            Carts
          </Button>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box className={classes.navBarOnDesktop}>
        <NavLink exact to="/" className={classes.link}>
          <Button className={classes.button}>Home</Button>
        </NavLink>
        <NavLink to="/products" className={classes.link}>
          <Button className={classes.button}>Products</Button>
        </NavLink>
        <NavLink to="/carts" className={classes.link}>
          <Button className={classes.button}>Carts</Button>
        </NavLink>
      </Box>
      {renderMenuOnMobile}
    </div>
  );
}
