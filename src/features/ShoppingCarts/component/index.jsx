import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PropTypes from 'prop-types';
import React from 'react';
import InputNumberWithButton from 'src/components/FormFields/InputNumberWithButton';
import SalePriceComponent from 'src/components/SalePrice';
import QuantityForm from 'src/features/products/components/quantityForm';

CartContent.propTypes = {
  cartItems: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '1rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function CartContent({ cartItems }) {
  console.log({ cartItems });
  const newCart = cartItems.filter((item) => !!item.id);
  console.log({ newCart });
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <h2>Cart Products</h2>
      {newCart.length < 1 && <Typography>Not thing in your shopping cart</Typography>}
      {newCart.length >= 1 &&
        newCart.map((item) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {item.name}
                  </Typography>
                  <SalePriceComponent product={item.product} />
                </CardContent>
                <div className={classes.controls}>
                  <QuantityForm product={item.product} />
                </div>
              </div>
              <CardMedia
                className={classes.cover}
                image={item.product.images[0]}
                onError={() => {
                  let idx = 0;
                  if (idx <= item.product.images.length) {
                    idx++;
                    return item.product.images[idx];
                  }
                  return;
                }}
              />
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

export default CartContent;
