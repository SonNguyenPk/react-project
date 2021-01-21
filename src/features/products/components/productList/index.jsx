import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { removeLettersOfString } from 'src/ulities/ulities';

ProductList.propTypes = {
  productList: PropTypes.array,
};

ProductList.defaultProps = {
  productList: [],
};

const useStyle = makeStyles({
  grid: {
    transition: 'all .5s ease',
    '&:hover': { transform: 'scale(1.05)', zIndex: 99 },
  },
  cardProduct: { height: '100%', display: 'flex', flexDirection: 'column' },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    '& div:nth-child(2)': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      '& p:nth-child(2)': {
        flex: '1 0 auto',
      },
    },
  },
});

function ProductList(props) {
  const { productList, onEdit, onRemove } = props;
  const classes = useStyle();

  return (
    <div>
      <Grid container direction="row" spacing={3}>
        {productList.map((product) => (
          <Grid
            hovered="true"
            key={product.id}
            item
            xs={12}
            sm={6}
            md={3}
            className={classes.grid}
            zeroMinWidth
          >
            <Card className={classes.cardProduct}>
              <CardActionArea className={classes.cardItem}>
                <CardMedia
                  component="img"
                  height="200"
                  alt="Contemplative Reptile"
                  image={product.images[0]}
                  onError={() => {
                    let idx = 0;
                    if (idx <= product.images.length) {
                      idx++;
                      return product.images[idx];
                    }
                    return;
                  }}
                  title="Contemplative Reptile"
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    whiteSpace="pre-wrap"
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    whiteSpace="pre-line"
                  >
                    {removeLettersOfString(product.shortDescription, '&nbsp;')}
                  </Typography>
                  <Typography variant="h5" color="textSecondary" component="h5">
                    {new Intl.NumberFormat('de-DE', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(product.originalPrice)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;
