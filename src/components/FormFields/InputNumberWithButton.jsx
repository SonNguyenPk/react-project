import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Add, Remove } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

InputNumberWithButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  form: PropTypes.object.isRequired,
  showErrorMessage: PropTypes.bool,
};

InputNumberWithButton.defaultProps = {
  name: '',
  label: '',
  showErrorMessage: true,
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  quantitySection: {
    display: 'flex',
    flexFlow: 'row noWrap',
    margin: '1rem  0px',
    '& div': {
      margin: '0px',
    },
    '& input': {
      flex: '1 0 auto',
      minWidth: '50px',
      width: '50px',
    },
    '& button': {
      width: '50px',
      height: '50px',
    },
  },
}));

function InputNumberWithButton(props) {
  const { name, form, showErrorMessage, value } = props;
  const [quantity, setQuantity] = useState(() => {
    if (value) return value;
    return 0;
  });
  const formState = form.formState;
  const errorMessage = formState.errors[name]?.message;
  const hasError = !!errorMessage;

  const classes = useStyles();
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ value, onChange, onBlur }) => (
        <Box className={classes.quantitySection}>
          <Button
            className={classes.button}
            onClick={(e) => {
              const newQuantity = parseInt(quantity) - 1;
              setQuantity(newQuantity);
              onChange(newQuantity);
            }}
            disabled={quantity <= 0 ? true : false}
          >
            <Remove />
          </Button>
          <TextField
            name={name}
            variant="outlined"
            type="number"
            value={quantity}
            onBlur={onBlur}
            error={hasError}
            helperText={showErrorMessage && errorMessage}
            onChange={(e) => {
              onChange(e.target.value);
              setQuantity(e.target.value);
            }}
          />

          <Button
            className={classes.button}
            onClick={() => {
              const newQuantity = parseInt(quantity) + 1;
              setQuantity(newQuantity);
              onChange(newQuantity);
            }}
            disabled={quantity > 30 ? true : false}
          >
            <Add />
          </Button>
        </Box>
      )}
    />
  );
}

export default InputNumberWithButton;
