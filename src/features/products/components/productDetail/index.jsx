import { Box, Button, Grid, Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SalePriceComponent from 'src/components/SalePrice';
import { addToCart } from 'src/features/ShoppingCarts/cartActions';
import QuantityForm from '../quantityForm';

ProductItem.propTypes = {
  product: PropTypes.object,
  handleBuyClick: PropTypes.func,
};

ProductItem.defaultProps = {
  product: null,
  handleBuyClick: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '410px',
  },

  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    alignItems: 'center',
  },

  imageSlide: {
    '&>div': {
      display: 'flex',
      alignItems: 'center',
    },
  },

  gridDescription: {
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '&*': {
      width: '100%',
    },

    '& img': {
      width: '100%',
    },

    '& ul': {
      paddingLeft: '0',
    },
  },
  quantitySection: {
    display: 'flex',
    flexFlow: 'row noWrap',
    width: '65%',
    margin: '1rem  0px',
    '& div': {
      margin: '0px',
    },
    '& input': {
      flex: '1 0 auto',
    },
    '& .button': {
      width: '50px',
      height: '50px',
    },
  },
}));

function ProductItem(props) {
  const { product } = props;
  const [showImage, setShowImage] = useState(0);

  const dispatch = useDispatch();

  // to convert html string by using parse form html react parser product.description
  const HTMLDescription = product.description;

  const classes = useStyles();
  const handleBuyClick = (data, product) => {
    const action = addToCart(data, product);
    dispatch(action);
  };

  return (
    <div>
      <Grid container direction="row">
        <Grid item className={classes.root} xs={12} sm={6}>
          <Box className={classes.image}>
            <Box
              component="img"
              src={product.images[showImage]}
              alt={product.title}
              maxWidth="60%"
              maxHeight="400px"
            />
          </Box>

          <GridList className={classes.gridList} spacing={1} cols={5} cellHeight={100}>
            {/* <Button>icon</Button> */}
            {product.images.map((image, idx) => (
              <GridListTile key={`${product.id}.${idx}`} className={classes.imageSlide}>
                <Button onClick={() => setShowImage(idx)}>
                  <img src={image} alt={product.title} width="80%" />
                </Button>
              </GridListTile>
            ))}
            {/* <Button>icon</Button> */}
          </GridList>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs>
              <Typography variant="h2" component="h2">
                {product.name}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {product.shortDescription}
              </Typography>
              <Grid item xs>
                <SalePriceComponent product={product} />
              </Grid>
              <Grid item>
                {/* form control product quantity  */}
                <Typography>Quantity</Typography>
                <QuantityForm
                  product={product}
                  handleBuyClick={handleBuyClick}
                  showButton={true}
                  buttonName="Buy"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridDescription}>
          {parse(HTMLDescription)}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductItem;
