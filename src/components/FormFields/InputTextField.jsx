import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  form: PropTypes.object.isRequired,
};

InputTextField.defaultProps = {
  name: '',
  label: '',
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function InputTextField(props) {
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
        <TextField
          fullWidth
          className={classes.root}
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

export default InputTextField;
