import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import React from 'react';
import { NavLink } from 'react-router-dom';
import homePic from 'src/asset/images/home-page.jpg';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    '&>button': {
      marginTop: '3rem',
    },
  },
  button: {
    transition: 'all .5s linear',
    '&:hover': {
      backgroundColor: blueGrey[100],
      transform: 'scale(1.1, 1.1)',
    },
  },
}));

function HomePage(props) {
  const classes = useStyles();
  return (
    <div>
      <Box
        pt={3}
        textAlign="center"
        style={{ backgroundImage: `url(${homePic})`, backgroundSize: '100% 100%' }}
        height="800px"
      >
        <Typography variant="h2">Welcome to James Shop</Typography>
        <Typography variant="body1" display="block">
          Make you feel happy with every order!!!😘😘😘
        </Typography>
        <Typography variant="body1" display="block">
          Shopping is a passion, Passion is a kind of fruit. Therefore, Shopping is so
          good for health 😍😍❤❤
        </Typography>
        <NavLink to="/products" className={classes.link}>
          <Button className={classes.button} variant="outlined">
            GO TO SHOP PRODUCT LIST
          </Button>
        </NavLink>
      </Box>
    </div>
  );
}

export default HomePage;
