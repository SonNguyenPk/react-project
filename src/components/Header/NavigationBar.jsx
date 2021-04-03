import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import { Box, Button, makeStyles, Menu, MenuItem } from '@material-ui/core';

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
  },
}));

export function NavigationBar({ mobileNavBar, handleClose }) {
  const classes = useStyles();

  const location = useLocation();
  const match = useRouteMatch();

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
        <NavLink exact to={match.path} className={classes.link}>
          <Button
            className={classes.button}
            variant={location.pathname === '/' ? 'contained' : 'outlined'}
            onClick={handleCloseNavBar}
            color="primary"
          >
            Home
          </Button>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={`${match.path}products`} className={classes.link}>
          <Button
            className={classes.button}
            variant={location.pathname === '/products' ? 'contained' : 'outlined'}
            onClick={handleCloseNavBar}
            color="primary"
          >
            Products
          </Button>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/carts" className={classes.link}>
          <Button
            className={classes.button}
            variant={location.pathname === '/carts' ? 'contained' : 'outlined'}
            onClick={handleCloseNavBar}
            color="primary"
          >
            Carts
          </Button>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box className={classes.navBarOnDesktop}>
        <NavLink exact to={match.path} className={classes.link}>
          <Button
            className={classes.button}
            variant={location.pathname === '/' ? 'contained' : 'outlined'}
          >
            Home
          </Button>
        </NavLink>
        <NavLink to="/products" className={classes.link}>
          <Button
            className={classes.button}
            variant={location.pathname === '/products' ? 'contained' : 'outlined'}
          >
            Products
          </Button>
        </NavLink>
        <NavLink to="/carts" className={classes.link}>
          <Button
            className={classes.button}
            variant={location.pathname === '/carts' ? 'contained' : 'outlined'}
          >
            Carts
          </Button>
        </NavLink>
      </Box>
      {renderMenuOnMobile}
    </div>
  );
}
