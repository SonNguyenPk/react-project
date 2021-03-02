import { IconButton, makeStyles, Tooltip } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

ScrollToTop.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
      transition: 'all .5s ease',
    },

    position: 'fixed',
    right: '40px',
    bottom: '20px',
    zIndex: 99,
    '& :hover': {
      backgroundColor: 'lightBlue',
    },
  },
}));

function ScrollToTop(props) {
  const classes = useStyles();
  const [show, setShow] = useState('none');

  window.onscroll = () => {
    const y = window.scrollY;
    if (y > 100) setShow('block');
    if (y <= 100) setShow('none');
  };

  return (
    <div className={classes.root} style={{ display: show }}>
      <Tooltip title="To top" aria-label="toTop">
        <IconButton
          color="primary"
          component="span"
          onClick={() => {
            window.scrollTo({ top: '0', behavior: 'smooth' });
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ScrollToTop;
