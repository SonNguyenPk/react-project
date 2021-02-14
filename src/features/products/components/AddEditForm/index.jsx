import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from 'src/components/FormFields/InputField';
import InputTexAreaField from 'src/components/FormFields/InputTextAreaField';
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
  shortDescription: yup
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
      <InputField name="name" label="Product Name" type="text" form={form} />
      <InputTexAreaField
        name="shortDescription"
        label="Product Description"
        form={form}
      />
      <InputField name="salePrice" label="Sale Price" type="number" form={form} />
      <InputField name="originalPrice" label="Original Price" type="number" form={form} />
      <InputField name="promotionPercent" label="Promotion" type="number" form={form} />
      <InputImageField name="images" label="upload images" form={form} />
    </form>
  );
}

export default AddEditForm;