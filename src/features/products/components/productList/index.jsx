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

ProductList.propTypes = {
  productList: PropTypes.array,
};

ProductList.defaultProps = {
  productList: [],
};

const useStyle = makeStyles({
  itemProduct: { height: '100%', display: 'flex column nowrap' },
  smallItem: { flex: '1 0 auto' },
});

function ProductList(props) {
  const { productList } = props;
  const classes = useStyle();

  return (
    <div>
      <Grid container direction="row" spacing={3}>
        {productList.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <Card className={classes.itemProduct}>
              <CardActionArea className={classes.smallItem}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={product.images[1]}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.shortDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
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
