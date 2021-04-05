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
import SalePriceComponent from 'src/components/SalePrice';

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
  cardProduct: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  cardHeader: {
    width: '35px',
    height: '20px',

    backgroundColor: 'red',
    border: '0px',
    borderRadius: '3px',

    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99,

    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
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
  console.log({ match });
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
                {product.promotionPercent !== 0 && (
                  <Typography
                    variant="body1"
                    className={classes.cardHeader}
                  >{`-${product.promotionPercent}%`}</Typography>
                )}
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
                    <Typography gutterBottom variant="h5" component="h6">
                      {product.name}
                    </Typography>
                    <SalePriceComponent product={product} />
                  </CardContent>
                </CardActionArea>
              </Link>

              <CardActions>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    flex: '1 0 auto',
                  }}
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
