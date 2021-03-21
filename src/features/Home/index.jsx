import { Typography } from '@material-ui/core';
import React from 'react';
import homePic from 'src/images/home-page.jpg';

function HomePage(props) {
  return (
    <div>
      <Typography>Welcome to James Shop</Typography>
      <img src={homePic} alt="home" width="100%" />
    </div>
  );
}

export default HomePage;
