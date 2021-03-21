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
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';

HeaderMobile.propTypes = {
  totalQuantity: PropTypes.number,
};

HeaderMobile.defaultProps = {
  totalQuantity: 0,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
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
    width: '100%',
  },

  sectionMobile: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  navBarOnMobile: {
    '& button': {
      width: '100%',
      border: 'none',
    },
  },
  growMobile: {
    display: 'block',
    flexGrow: 1,
  },
}));

export default function HeaderMobile({ totalQuantity }) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [mobileNavBar, setMobileNavBar] = useState(null);
  const location = useLocation();
  const match = useRouteMatch();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobileNavBarOpen = Boolean(mobileNavBar);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileNavBarClose = () => {
    setMobileNavBar(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileNavBarOpen = (event) => {
    setMobileNavBar(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavLink to="/addProduct" className={classes.link}>
        <MenuItem>
          <Tooltip title="Add new product" interactive>
            <IconButton>
              <AddCircle color="action" />
            </IconButton>
          </Tooltip>
          <p>Add</p>
        </MenuItem>
      </NavLink>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <NavLink to="/carts" className={classes.link}>
        <MenuItem>
          <IconButton
            aria-label="show 17 new notifications"
            color="default"
            onClick={handleMobileMenuClose}
          >
            <Badge badgeContent={totalQuantity} color="secondary">
              <AddShoppingCart />
            </Badge>
          </IconButton>
          <p>Carts</p>
        </MenuItem>
      </NavLink>
    </Menu>
  );
  const renderMobileNavBar = (
    <Menu
      className={classes.navBarOnMobile}
      anchorEl={mobileNavBar}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMobileNavBarOpen}
      onClose={handleMobileNavBarClose}
    >
      <MenuItem>
        <NavLink exact to={match.path} className={classes.link}>
          <Button
            className={classes.button}
            variant={location.pathname === '/' ? 'contained' : 'outlined'}
            onClick={handleMobileNavBarClose}
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
            onClick={handleMobileNavBarClose}
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
            onClick={handleMobileNavBarClose}
            color="primary"
          >
            Carts
          </Button>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleMobileNavBarOpen}
            >
              <MenuIcon />
            </IconButton>
          </div>
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
          <div className={classes.growMobile} />
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileNavBar}
      {renderMobileMenu}
    </div>
  );
}
