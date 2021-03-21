import { Typography } from '@material-ui/core';
import React from 'react';
import homePic from 'src/images/home-page.jpg';

function HomePage(props) {
  return (
    <div>
      <img src={homePic} alt="home" width="100%" />
      <Typography variant="h2">Welcome to James Shop</Typography>
    </div>
  );
}

export default HomePage;
