import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputNumberWithButton from 'src/components/FormFields/InputNumberWithButton';
import * as yup from 'yup';

QuantityForm.propTypes = {
  product: PropTypes.object.isRequired,
  handleBuyClick: PropTypes.func,
};

QuantityForm.defaultProp = {
  handleBuyClick: null,
};

const schema = yup.object().shape({
  productQuantity: yup.number().positive().max(30, 'Maximum for each order is 30'),
});

function QuantityForm(props) {
  const { product, handleBuyClick } = props;
  const cartItem = useSelector((state) => state.cart);
  console.log({ cartItem });
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      productQuantity: 0,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data) => {
    if (handleBuyClick) {
      console.log({ data, product });
      handleBuyClick(data, product);
    }
  };

  // error message of product quantity
  const errorMessage = form.formState.errors.productQuantity?.message;

  return (
    <form noValidate autoCapitalize="off" onSubmit={form.handleSubmit(handleSubmitForm)}>
      <InputNumberWithButton
        name="productQuantity"
        type="number"
        form={form}
        fullWidth={false}
        showErrorMessage={false}
      />
      <FormHelperText id="quantity" style={{ color: 'red' }}>
        {errorMessage}
      </FormHelperText>
      <Button variant="contained" color="secondary" type="submit">
        Buy
      </Button>
    </form>
  );
}

export default QuantityForm;
