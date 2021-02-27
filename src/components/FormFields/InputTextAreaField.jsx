import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import parse from 'html-react-parser';
import { Box, Button, Typography } from '@material-ui/core';

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
  // viewButton: {
  //   height: { handleClick },
  //   overflow: 'hidden',
  //   transition: 'all 1s linear',
  // },
}));

function InputTexAreaField(props) {
  const { name, label, form } = props;
  const [preview, setPreview] = useState('0px');
  const formState = form.formState;
  const errorMessage = formState.errors[name]?.message;
  const hasError = !!errorMessage;

  const classes = useStyles();

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ value, onChange, onBlur }) => (
        <Box>
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
          <Button
            disabled={preview === 'max-content' ? true : false}
            variant="contained"
            color="primary"
            onClick={() => setPreview('max-content')}
          >
            View Description
          </Button>
          <Box
            height={preview}
            style={{
              overflow: 'hidden',
              transition: 'all 1s linear',
            }}
          >
            {parse(value)}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setPreview('0px')}
            >
              Hide Description
            </Button>
          </Box>
        </Box>
      )}
    />
  );
}

export default InputTexAreaField;
