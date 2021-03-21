import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputNumberWithButton from 'src/components/FormFields/InputNumberWithButton';
import * as yup from 'yup';

QuantityForm.propTypes = {
  product: PropTypes.object.isRequired,
  handleBuyClick: PropTypes.func,
  value: PropTypes.number,
  showButton: PropTypes.bool,
};

QuantityForm.defaultProp = {
  handleBuyClick: null,
  value: 0,
  showButton: true,
};

const schema = yup.object().shape({
  productQuantity: yup.number().positive().max(30, 'Maximum for each order is 30'),
});

function QuantityForm(props) {
  const { product, handleBuyClick, value, showButton } = props;

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      productQuantity: value || 0,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data) => {
    if (handleBuyClick) {
      handleBuyClick(data, product);
    }
  };

  // error message of product quantity
  const errorMessage = form.formState.errors.productQuantity?.message;

  return (
    <form noValidate autoCapitalize="off" onSubmit={form.handleSubmit(handleSubmitForm)}>
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
          Buy
        </Button>
      )}
    </form>
  );
}

export default QuantityForm;
