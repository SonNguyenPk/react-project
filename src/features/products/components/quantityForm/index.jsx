import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormHelperText,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InputNumberWithButton from 'src/components/FormFields/InputNumberWithButton';
import * as yup from 'yup';

QuantityForm.propTypes = {
  product: PropTypes.object.isRequired,
  handleBuyClick: PropTypes.func,
  handleUpdateClick: PropTypes.func,
  value: PropTypes.number,
  showButton: PropTypes.bool,
};

QuantityForm.defaultProp = {
  handleBuyClick: null,
  handleUpdateClick: null,
  value: 0,
  showButton: true,
};

const schema = yup.object().shape({
  productQuantity: yup.number().positive().max(30, 'Maximum for each order is 30'),
});

function QuantityForm(props) {
  const {
    product,
    handleBuyClick,
    handleUpdateClick,
    value,
    showButton,
    buttonName,
  } = props;
  const [showDialog, setShowDialog] = useState(false);

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      productQuantity: value || 0,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data) => {
    // add new quantity to cart
    if (handleBuyClick) {
      handleBuyClick(data, product);
      setShowDialog(true);
    }

    // replace quantity of existing product in cart
    if (handleUpdateClick) {
      handleUpdateClick(data, product);
    }
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  // error message of product quantity
  const errorMessage = form.formState.errors.productQuantity?.message;

  const showDialogClickBuy = (
    <Dialog
      open={showDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Congratulation'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Adding product successfully !!!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link to="/carts">
          <Button onClick={handleClose} color="primary">
            Go to Cart
          </Button>
        </Link>
        <Button onClick={handleClose} color="primary" autoFocus>
          Keep Shopping
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div>
      <form
        noValidate
        autoCapitalize="off"
        onSubmit={form.handleSubmit(handleSubmitForm)}
      >
        <InputNumberWithButton
          value={value}
          name="productQuantity"
          type="number"
          form={form}
          fullWidth={false}
          showErrorMessage={false}
        />
        <FormHelperText id="quantity" style={{ color: 'red' }}>
          {errorMessage}
        </FormHelperText>
        {showButton && (
          <Button variant="contained" color="secondary" type="submit">
            {buttonName}
          </Button>
        )}
      </form>
      {showDialogClickBuy}
    </div>
  );
}

export default QuantityForm;
