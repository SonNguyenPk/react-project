// import { Button, Tooltip } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import Badge from '@material-ui/core/Badge';
// import IconButton from '@material-ui/core/IconButton';
// import InputBase from '@material-ui/core/InputBase';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import { AddCircle, AddShoppingCart } from '@material-ui/icons';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import HomeIcon from '@material-ui/icons/Home';
// import MenuIcon from '@material-ui/icons/Menu';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import SearchIcon from '@material-ui/icons/Search';
// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
// import { MobileNavigationBar } from './NavigationBar';

// HeaderComponent.propTypes = {
//   totalQuantity: PropTypes.number,
// };

// HeaderComponent.defaultProps = {
//   totalQuantity: 0,
// };

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },

//   menuButton: {
//     marginRight: theme.spacing(2),
//   },

//   homeButton: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   link: {
//     textDecoration: 'none',
//     [theme.breakpoints.up('md')]: {
//       width: '100%',
//     },
//   },

//   navBarOnDesktop: {
//     display: 'flex',
//     flexFlow: 'row noWrap',
//     flexGrow: 1,
//     [theme.breakpoints.down('sm')]: {
//       display: 'none',
//     },
//     '&  button': {
//       width: '100%',
//       border: 'none',
//       color: 'blue',
//       '&': {
//         textAlign: 'left',
//         color: 'white',
//       },
//     },
//   },
//   navBarOnMobile: {
//     '& button': {
//       width: '100%',
//       border: 'none',
//     },
//   },
//   growMobile: {
//     display: 'block',
//     flexGrow: 1,
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
// }));

// export default function HeaderComponent({ totalQuantity }) {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
//   const [mobileNavBar, setMobileNavBar] = useState(null);
//   const location = useLocation();
//   const match = useRouteMatch();

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//   const isMobileNavBarOpen = Boolean(mobileNavBar);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMobileNavBarClose = () => {
//     setMobileNavBar(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const handleMobileNavBarOpen = (event) => {
//     setMobileNavBar(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <NavLink to="/addProduct" className={classes.link}>
//           <Tooltip title="Add new product" interactive>
//             <IconButton>
//               <AddCircle color="action" />
//             </IconButton>
//           </Tooltip>
//         </NavLink>
//         <p>Add</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//       <MenuItem>
//         <NavLink to="/carts" className={classes.link}>
//           <IconButton
//             aria-label="show 17 new notifications"
//             color="default"
//             onClick={handleMobileMenuClose}
//           >
//             <Badge badgeContent={totalQuantity} color="secondary">
//               <AddShoppingCart />
//             </Badge>
//           </IconButton>
//         </NavLink>
//         <p>Carts</p>
//       </MenuItem>
//     </Menu>
//   );
//   //   const renderMobileNavBar = (
//   //     <Menu
//   //       className={classes.navBarOnMobile}
//   //       anchorEl={mobileNavBar}
//   //       anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//   //       id={mobileMenuId}
//   //       keepMounted
//   //       transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//   //       open={isMobileNavBarOpen}
//   //       onClose={handleMobileNavBarClose}
//   //     >
//   //       <MenuItem>
//   //         <NavLink exact to={match.path} className={classes.link}>
//   //           <Button
//   //             className={classes.button}
//   //             variant={location.pathname === '/' ? 'contained' : 'outlined'}
//   //             onClick={handleMobileNavBarClose}
//   //             color="primary"
//   //           >
//   //             Home
//   //           </Button>
//   //         </NavLink>
//   //       </MenuItem>
//   //       <MenuItem>
//   //         <NavLink to={`${match.path}products`} className={classes.link}>
//   //           <Button
//   //             className={classes.button}
//   //             variant={location.pathname === '/products' ? 'contained' : 'outlined'}
//   //             onClick={handleMobileNavBarClose}
//   //             color="primary"
//   //           >
//   //             Products
//   //           </Button>
//   //         </NavLink>
//   //       </MenuItem>
//   //       <MenuItem>
//   //         <NavLink to="/carts" className={classes.link}>
//   //           <Button
//   //             className={classes.button}
//   //             variant={location.pathname === '/carts' ? 'contained' : 'outlined'}
//   //             onClick={handleMobileNavBarClose}
//   //             color="primary"
//   //           >
//   //             Carts
//   //           </Button>
//   //         </NavLink>
//   //       </MenuItem>
//   //     </Menu>
//   //   );

//   return (
//     <div className={classes.grow}>
//       <AppBar position="static">
//         <Toolbar>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               edge="start"
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleMobileNavBarOpen}
//             >
//               <MenuIcon />
//             </IconButton>
//           </div>
//           <NavLink exact to={match.path} className={classes.homeButton}>
//             <Button>
//               <HomeIcon color="action" />
//             </Button>
//           </NavLink>

//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//           <div className={classes.navBarOnDesktop}>
//             <NavLink exact to={match.path} className={classes.link}>
//               <Button
//                 className={classes.button}
//                 variant={location.pathname === '/' ? 'contained' : 'outlined'}
//                 onClick={handleMobileNavBarClose}
//               >
//                 Home
//               </Button>
//             </NavLink>
//             <NavLink to="/products" className={classes.link}>
//               <Button
//                 className={classes.button}
//                 variant={location.pathname === '/products' ? 'contained' : 'outlined'}
//                 onClick={handleMobileNavBarClose}
//               >
//                 Products
//               </Button>
//             </NavLink>
//             <NavLink to="/carts" className={classes.link}>
//               <Button
//                 className={classes.button}
//                 variant={location.pathname === '/carts' ? 'contained' : 'outlined'}
//                 onClick={handleMobileNavBarClose}
//               >
//                 Carts
//               </Button>
//             </NavLink>
//           </div>
//           {/* Desktop */}
//           <div className={classes.sectionDesktop}>
//             <NavLink to="/addProduct" className={classes.link}>
//               <Tooltip title="Add new product" interactive>
//                 <IconButton>
//                   <AddCircle color="action" />
//                 </IconButton>
//               </Tooltip>
//             </NavLink>
//             <NavLink to="/carts" className={classes.link}>
//               <IconButton aria-label="show new notifications" color="default">
//                 <Badge badgeContent={totalQuantity} color="secondary">
//                   <AddShoppingCart />
//                 </Badge>
//               </IconButton>
//             </NavLink>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
//           {/* Mobile */}
//           <div className={classes.growMobile} />
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <MobileNavigationBar isNavBarOpen={mobileNavBar} />
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }
