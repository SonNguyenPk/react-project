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
  const [x, setX] = useState(0);

  window.onscroll = () => {
    const y = window.scrollY;
    setX(y);
  };
  useEffect(() => {
    (() => {
      if (x > 100) return setShow('block');
      if (x <= 100) return setShow('none');
    })();
    return () => {
      setShow('none');
    };
  }, [x]);

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
