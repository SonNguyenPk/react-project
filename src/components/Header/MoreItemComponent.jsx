import {
  Badge,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Tooltip,
} from '@material-ui/core';
import { AccountCircle, AddCircle, AddShoppingCart } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

MoreItemComponent.propTypes = {
  mobileMoreItem: PropTypes.any,
  handleClose: PropTypes.func,
};

MoreItemComponent.defaultProps = {
  handleClose: null,
};

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

function MoreItemComponent({ totalQuantity, mobileMoreItem, handleClose }) {
  const classes = useStyles();

  const isOpen = Boolean(mobileMoreItem);

  const handleMoreItemClose = () => {
    if (handleClose) {
      handleClose(null);
    }
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMoreItem = (
    <Menu
      anchorEl={mobileMoreItem}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      onClose={handleMoreItemClose}
    >
      <MenuItem onClick={handleMoreItemClose}>
        <NavLink to="/addProduct" className={classes.link}>
          <Tooltip title="Add new product" interactive>
            <IconButton>
              <AddCircle color="action" />
            </IconButton>
          </Tooltip>
        </NavLink>
        <p>Add</p>
      </MenuItem>
      <MenuItem onClick={handleMoreItemClose}>
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
      <MenuItem onClick={handleMoreItemClose}>
        <NavLink to="/carts" className={classes.link}>
          <IconButton aria-label="show 17 new notifications" color="default">
            <Badge badgeContent={totalQuantity} color="secondary">
              <AddShoppingCart />
            </Badge>
          </IconButton>
        </NavLink>
        <p>Carts</p>
      </MenuItem>
    </Menu>
  );
  return (
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
        // aria-controls={menuId}
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {renderMoreItem}
    </div>
  );
}

export default MoreItemComponent;
