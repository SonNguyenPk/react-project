import { Button, Tooltip } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { AddCircle, AddShoppingCart } from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';

HeaderDesktop.propTypes = {
  totalQuantity: PropTypes.number,
};

HeaderDesktop.defaultProps = {
  totalQuantity: 0,
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  homeButton: {
    display: 'block',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '20ch',
  },
  sectionDesktop: {
    display: 'flex',
  },

  link: {
    textDecoration: 'none',
    width: '100%',
  },

  navBarOnDesktop: {
    display: 'flex',
    flexFlow: 'row noWrap',
    flexGrow: 1,
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
}));

export default function HeaderDesktop({ totalQuantity }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const location = useLocation();
  const match = useRouteMatch();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <NavLink exact to={match.path} className={classes.homeButton}>
            <Button>
              <HomeIcon color="action" />
            </Button>
          </NavLink>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {/* Navigation bar for desktop version */}
          <div className={classes.navBarOnDesktop}>
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
          </div>
          {/* Desktop */}
          <div className={classes.sectionDesktop}>
            <NavLink to="/addProduct" className={classes.link}>
              <Tooltip title="Add new product" interactive>
                <IconButton>
                  <AddCircle color="action" />
                </IconButton>
              </Tooltip>
            </NavLink>
            <NavLink to="/carts" className={classes.link}>
              <IconButton aria-label="show new notifications" color="default">
                <Badge badgeContent={totalQuantity} color="secondary">
                  <AddShoppingCart />
                </Badge>
              </IconButton>
            </NavLink>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
