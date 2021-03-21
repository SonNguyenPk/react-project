import { Button, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import SalePriceComponent from 'src/components/SalePrice';
import QuantityForm from 'src/features/products/components/quantityForm';

CartContent.propTypes = {
  cartItems: PropTypes.object,
  onRemove: PropTypes.func,
};

CartContent.defaultProps = {
  onRemove: null,
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
    width: '50%',
  },
  controls: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function CartContent({ cartProducts, onRemove }) {
  const cartItems = cartProducts.cartItems;
  const newCart = cartItems?.filter((item) => !!item.id);
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid>
      <Grid container spacing={2}>
        {newCart.length < 1 && <Typography>Not thing in your shopping cart</Typography>}
        {newCart.length >= 1 &&
          newCart.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <Link
                    style={{ textDecoration: 'none', color: 'black', flex: '1 0 auto' }}
                    to={`/products/product-detail/${item.id}`}
                  >
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {item.product.name}
                      </Typography>
                      <SalePriceComponent product={item.product} />
                    </CardContent>
                  </Link>
                  <div className={classes.controls}>
                    <QuantityForm
                      product={item}
                      value={item.productQuantity}
                      showButton={false}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        onRemove && onRemove(item);
                      }}
                    >
                      Remove
                    </Button>
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
      {newCart.length >= 1 && (
        <Grid>
          <Typography variant="h4">
            {`Total Charge:
            ${new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'VND',
            }).format(cartProducts.totalCharge)}`}
          </Typography>
          <Button variant="contained" color="secondary">
            Order
          </Button>
        </Grid>
      )}
    </Grid>
  );
}

export default CartContent;
