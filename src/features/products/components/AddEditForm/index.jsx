import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputNumberField from 'src/components/FormFields/InputNumberField';
import InputField from 'src/components/FormFields/InputNumberField';
import InputTexAreaField from 'src/components/FormFields/InputTextAreaField';
import InputTextField from 'src/components/FormFields/InputTextField';
import InputImageField from 'src/components/FormFields/UploadField/InputImage';
import * as yup from 'yup';

AddEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

AddEditForm.defaultProps = {};

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Your Product must have a name')
    .test(
      'Name is to short',
      'Product name must have at least 2 words of  characters each one',
      (value) => {
        return value.split(' ').filter((word) => word.length >= 2).length >= 2;
      }
    ),
  description: yup
    .string()
    .required(
      'Please fill your product description for having clearly knowledge to your product'
    )
    .test('Description is too short', 'at least 50 words', (value) => {
      return value.split(' ').filter((word) => word.length >= 2).length >= 50;
    }),
});

function AddEditForm(props) {
  const { initialValues, onSubmit } = props;
  console.log({ initialValues });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (formValue) => {
    if (onSubmit) {
      onSubmit(formValue);
      console.log({ formValue });
    }
  };

  return (
    <form noValidate onSubmit={form.handleSubmit(handleSubmitForm)}>
      <InputTextField name="name" label="Product Name" form={form} />
      <InputTexAreaField name="description" label="Product Description" form={form} />
      <InputNumberField name="salePrice" label="Sale Price" type="number" form={form} />
      <InputNumberField name="originalPrice" label="Original Price" form={form} />
      <InputNumberField name="promotionPercent" label="Promotion" form={form} />
      <InputImageField name="images" label="upload images" form={form} />
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        type="submit"
      >
        Save
      </Button>
    </form>
  );
}

export default AddEditForm;
