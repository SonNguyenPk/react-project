import { Box, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PhotoCamera } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import ShowImages from './ShowImage';

InputImageField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.object.isRequired,
};

InputImageField.defaultProps = {
  name: '',
  label: '',
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',

    height: '50px',
    width: '50px',
    border: '1px solid black',
    borderRadius: '5px',

    cursor: 'pointer',
  },
}));

const convertToArray = (object) => {
  if (!object) return {};
  const fileImages = [];
  const fileNameArray = [];
  const fileImageDetail = [];
  for (let key in object) {
    if (key === 'length') break;
    console.log(object[key]);
    const UrlImage = URL.createObjectURL(object[key]);
    const fileName = object[key].name;
    fileImages.push(UrlImage);
    fileNameArray.push(fileName);
    fileImageDetail.push(object[key]);
  }
  return { fileImages, fileNameArray, fileImageDetail };
};

function InputImageField(props) {
  const { name, label, form } = props;
  const [filesImage, setFilesImage] = useState(null);
  const [initialImages, setInitialImages] = useState(
    form.control.defaultValuesRef.current.images
  );
  // const formState = form.formState;
  // const errorMessage = formState.errors[name]?.message;
  // const hasError = !!errorMessage;

  const classes = useStyles();

  const handleOnChange = (e, onChange) => {
    setFilesImage(convertToArray(e.target.files));
  };

  const handleRemoveInitialImage = (Url, idxEdit) => {
    if (idxEdit >= 0) {
      const newImages = initialImages.filter((x) => Url !== x);
      setInitialImages(newImages);
    }
  };

  const handleRemoveUploadImage = (idxAdd) => {
    if (idxAdd >= 0) {
      const newFilesImage = { ...filesImage };
      newFilesImage.fileImages.splice(idxAdd, 1);
      newFilesImage.fileNameArray.splice(idxAdd, 1);
      newFilesImage.fileImageDetail.splice(idxAdd, 1);

      setFilesImage(newFilesImage);
    }
  };

  return (
    <Controller
      control={form.control}
      name={name}
      label={label}
      render={({ onBlur, onChange }) => (
        <Box>
          <ShowImages
            file={filesImage}
            initialImages={initialImages}
            onRemoveInitial={handleRemoveInitialImage}
            onRemoveAdd={handleRemoveUploadImage}
            onChange={onChange} // onChange is became a prop to ShowImage component
          />
          <Box width="50px">
            <input
              accept="image/*"
              style={{ display: 'none' }}
              multiple
              id="upFile"
              type="file"
              onChange={(e) => handleOnChange(e, onChange)}
            />
            <label htmlFor="upFile">
              <Tooltip title="Chosen your images" aria-label="add">
                <Box className={classes.button}>
                  <PhotoCamera />
                </Box>
              </Tooltip>
            </label>
          </Box>
        </Box>
      )}
    />
  );
}

export default InputImageField;
