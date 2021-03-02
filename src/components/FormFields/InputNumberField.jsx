import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';

InputNumberField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  form: PropTypes.object.isRequired,
};

InputNumberField.defaultProps = {
  name: '',
  label: '',
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

function InputNumberField(props) {
  const { name, label, form } = props;
  const formState = form.formState;
  const errorMessage = formState.errors[name]?.message;
  const hasError = !!errorMessage;

  const classes = useStyles();
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ value, onChange, onBlur }) => (
        <NumberFormat
          className={classes.root}
          thousandSeparator
          defaultValue={value}
          onValueChange={(value) => onChange(value.floatValue)}
          customInput={TextField}
          label={label}
          variant="outlined"
          onBlur={onBlur}
          error={hasError}
          helperText={errorMessage}
        />
      )}
    />
  );
}

export default InputNumberField;
