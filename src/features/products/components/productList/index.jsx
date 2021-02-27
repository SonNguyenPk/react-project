import {
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
import { Link, useRouteMatch } from 'react-router-dom';
<<<<<<< HEAD
=======
import ScrollToTop from 'src/components/ScrollToTop';
>>>>>>> origin/feature/products-addform

ProductList.propTypes = {
  productList: PropTypes.array,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

ProductList.defaultProps = {
  productList: [],
  onClick: null,
  onEdit: null,
  onRemove: null,
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
<<<<<<< HEAD
    height: '100%',
=======
>>>>>>> origin/feature/products-addform
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
  const match = useRouteMatch();
  const classes = useStyle();

  return (
    <div>
      <Grid container direction="row" spacing={3}>
        {productList.map((product, idx) => (
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
              <Link
                style={{ textDecoration: 'none', color: 'black', flex: '1 0 auto' }}
                to={`${match.path}/product-detail/${product.id}`}
              >
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
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
<<<<<<< HEAD
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.shortDescription}
                    </Typography>
=======
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                      {removeLettersOfString(product.shortDescription, '&nbsp')}
                    </Typography> */}
>>>>>>> origin/feature/products-addform
                    <Typography variant="h5" color="textSecondary" component="h5">
                      {new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(product.originalPrice)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>

              <CardActions>
                <Link
                  style={{ textDecoration: 'none', color: 'black', flex: '1 0 auto' }}
                  to={`${match.path}/edit/${product.id}`}
                >
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      onEdit && onEdit(product);
                    }}
                  >
                    Edit
                  </Button>
                </Link>

                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    onRemove && onRemove(product);
                  }}
                >
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
