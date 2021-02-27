<<<<<<< Updated upstream
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
=======
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
>>>>>>> Stashed changes
import { Controller } from 'react-hook-form';

InputTexAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  form: PropTypes.object.isRequired,
};

InputTexAreaField.defaultProps = {
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

function InputTexAreaField(props) {
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
          multiline
          rowsMax={10}
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

export default InputTexAreaField;
