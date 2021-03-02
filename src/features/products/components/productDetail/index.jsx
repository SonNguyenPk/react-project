import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import { Add, Remove } from '@material-ui/icons';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from 'src/components/FormFields/InputNumberField';
import SalePriceComponent from 'src/components/SalePrice';
import * as yup from 'yup';

ProductItem.propTypes = {
  product: PropTypes.object,
  handleBuyClick: PropTypes.func,
};

ProductItem.defaultProps = {
  product: null,
  handleBuyClick: null,
};
const schema = yup.object().shape({});

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
    width: '50%',
    margin: '1rem  0px',
    '& div': {
      margin: '0px',
    },
  },
}));

function ProductItem(props) {
  const { product, handleBuyClick } = props;
  console.log({ product });
  const [showImage, setShowImage] = useState(product.images[0]);
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      productQuantity: 0,
    },
    resolver: yupResolver(schema),
  });

  // to convert html string by using parse form html react parser
  const HTMLDescription = product.description;

  const handleSubmitForm = (data) => {
    if (handleBuyClick) {
      handleBuyClick(data);
    }
  };

  const classes = useStyles();
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
              <Typography>Quantity</Typography>
              <form
                noValidate
                autoCapitalize="off"
                onSubmit={form.handleSubmit(handleSubmitForm)}
              >
                <Box className={classes.quantitySection}>
                  <Button variant="outlined">
                    <Add />
                  </Button>
                  <InputField
                    name="productQuantity"
                    type="number"
                    form={form}
                    fullWidth={false}
                  />
                  <Button variant="outlined">
                    <Remove />
                  </Button>
                </Box>

                <Button variant="contained" color="secondary" type="submit">
                  Buy
                </Button>
              </form>
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
