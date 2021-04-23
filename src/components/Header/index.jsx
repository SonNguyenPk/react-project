import { Button, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import MoreItemComponent from './MoreItemComponent';
import { NavigationBar } from './NavigationBar';
import SearchItem from './SearchComponent';
import { router } from 'src/utilise/routerLink';

HeaderComponent.propTypes = {
  totalQuantity: PropTypes.number,
  handleSearch: PropTypes.func,
};

HeaderComponent.defaultProps = {
  totalQuantity: 0,
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  headerBar: {
    paddingLeft: 0,
    paddingRight: 0,
    height: '2rem',
  },

  homeButton: {
    display: 'block',
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
}));

export default function HeaderComponent({ totalQuantity, handleSearch, searchResult }) {
  const classes = useStyles();
  const [mobileNavBar, setMobileNavBar] = useState(null);
  const [mobileMoreItem, setMobileMoreItem] = useState(null);

  const match = useRouteMatch();
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleClose = () => {
    setMobileNavBar(null);
  };

  const handleMobileNavBarOpen = (e) => {
    setMobileMoreItem(null);
    setMobileNavBar(e.currentTarget);
  };
  const handleOpenMoreItem = (e) => {
    setMobileNavBar(null);
    setMobileMoreItem(e.currentTarget);
  };

  const handleMoreItemClose = () => {
    setMobileMoreItem(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container>
          <Toolbar className={classes.headerBar}>
            <div className={classes.sectionMobile}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={(e) => handleMobileNavBarOpen(e)}
              >
                <MenuIcon />
              </IconButton>
            </div>

            <NavLink exact to={router.home} className={classes.homeButton}>
              <Button>
                <HomeIcon color="action" />
              </Button>
            </NavLink>
            {/* Search Bar */}
            <SearchItem
              handleOnChange={(q) => handleSearch && handleSearch(q)}
              searchResult={searchResult}
            />

            {/* Nav Bat */}
            <div className={classes.grow}></div>
            <NavigationBar mobileNavBar={mobileNavBar} handleClose={handleClose} />
            <div className={classes.grow}></div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={(e) => handleOpenMoreItem(e)}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
            <MoreItemComponent
              mobileMoreItem={mobileMoreItem}
              handleClose={handleMoreItemClose}
              totalQuantity={totalQuantity}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
