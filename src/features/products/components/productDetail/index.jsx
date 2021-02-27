import { Box, Button, FormGroup, Grid, Input, Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import { useState } from 'react';
import parse, { domToReact } from 'html-react-parser';
=======
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { useState } from 'react';
>>>>>>> origin/feature/products-addform

ProductItem.propTypes = {
  product: PropTypes.object,
};

ProductItem.defaultProps = {
  product: null,
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
}));

function ProductItem(props) {
  const { product } = props;
  console.log({ product });
  const [showImage, setShowImage] = useState(product.images[0]);

  const classes = useStyles();
  const HTMLDescription = product.description;

  return (
    <Grid container direction="row">
      <Grid item className={classes.root} xs={12} sm={6}>
        <Box className={classes.image}>
          <Box
            component="img"
            src={showImage}
            alt={product.title}
            maxWidth="60%"
            maxHeight="400px"
          />
        </Box>

        <GridList className={classes.gridList} spacing={1} cols={5} cellHeight={100}>
          {/* <Button>icon</Button> */}
          {product.images.map((image, idx) => (
            <GridListTile key={`${product.id}.${idx}`} className={classes.imageSlide}>
              <Button onClick={() => setShowImage(image)}>
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
            <Grid item xs>
              <Typography variant="h2" component="h1">
                {product.name}
              </Typography>
              <Typography variant="h3" component="h2">
                {new Intl.NumberFormat('de-DE', {
                  style: 'currency',
                  currency: 'VND',
                }).format(product.originalPrice)}
              </Typography>
            </Grid>
            <Grid item>
              <FormGroup>
                <Input type="number" />
              </FormGroup>
              <Button variant="contained" color="secondary">
                Buy or Never
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridDescription}>
        {parse(HTMLDescription)}
      </Grid>
    </Grid>
  );
}

export default ProductItem;
