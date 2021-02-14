import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.object.isRequired,
};

InputField.defaultProps = {
  name: '',
  label: '',
  type: 'text',
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function InputField(props) {
  const { name, label, type, form } = props;
  const formState = form.formState;
  console.log('formState', formState);
  const errorMessage = formState.errors[name]?.message;
  const hasError = !!errorMessage;

  const classes = useStyles();
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ value, onChange, onBlur }) => (
        <TextField
          fullWidth
          className={classes.root}
          type={type}
          label={label}
          value={value}
          variant="outlined"
          onChange={onChange}
          onBlur={onBlur}
          error={hasError}
          helperText={errorMessage}
        />
      )}
    />
  );
}

export default InputField;
