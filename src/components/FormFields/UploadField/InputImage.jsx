import { Box, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
=======
import { PhotoCamera } from '@material-ui/icons';
>>>>>>> origin/feature/products-addform
import AddIcon from '@material-ui/icons/Add';
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
<<<<<<< HEAD
=======
    margin: '10px 0',
>>>>>>> origin/feature/products-addform

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
  const formState = form.formState;
  const errorMessage = formState.errors[name]?.message;
  const hasError = !!errorMessage;

  const classes = useStyles();

<<<<<<< HEAD
  const handleOnChange = (e) => {
    console.log(e.target.files);
    setFilesImage(convertToArray(e.target.files));
    console.log({ filesImage });
  };

  const handleRemoveInitial = (Url, idxEdit) => {
    console.log({ idxEdit, Url });
    if (idxEdit >= 0) {
      console.log(initialImages);
      const newImages = initialImages.filter((x) => Url !== x);
      console.log({ newImages });
=======
  const handleOnChange = (e, onChange) => {
    setFilesImage(convertToArray(e.target.files));
  };

  const handleRemoveInitialImage = (Url, idxEdit) => {
    if (idxEdit >= 0) {
      const newImages = initialImages.filter((x) => Url !== x);
>>>>>>> origin/feature/products-addform
      setInitialImages(newImages);
    }
  };

<<<<<<< HEAD
  const handleRemoveAdd = (idxAdd) => {
=======
  const handleRemoveUploadImage = (idxAdd) => {
>>>>>>> origin/feature/products-addform
    console.log({ idxAdd });
    if (idxAdd >= 0) {
      const newFilesImage = { ...filesImage };
      newFilesImage.fileImages.splice(idxAdd, 1);
      newFilesImage.fileNameArray.splice(idxAdd, 1);
      newFilesImage.fileImageDetail.splice(idxAdd, 1);

<<<<<<< HEAD
      console.log({ newFilesImage });
=======
>>>>>>> origin/feature/products-addform
      setFilesImage(newFilesImage);
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <Controller
        control={form.control}
        name={name}
        label={label}
        render={({ onChange, ref }) => (
          <Box>
            <ShowImages
              file={filesImage}
              initialImages={initialImages}
              onRemoveInitial={handleRemoveInitial}
              onRemoveAdd={handleRemoveAdd}
            />
            <input
=======
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
>>>>>>> origin/feature/products-addform
              style={{ display: 'none' }}
              multiple
              id="upFile"
              type="file"
<<<<<<< HEAD
              onChange={handleOnChange}
=======
              onChange={(e) => handleOnChange(e, onChange)}
>>>>>>> origin/feature/products-addform
            />
            <label htmlFor="upFile">
              <Tooltip title="Chosen a file" aria-label="add">
                <Box className={classes.button}>
<<<<<<< HEAD
                  <AddIcon />
=======
                  <PhotoCamera />
>>>>>>> origin/feature/products-addform
                </Box>
              </Tooltip>
            </label>
          </Box>
<<<<<<< HEAD
        )}
      />
    </div>
=======
        </Box>
      )}
    />
>>>>>>> origin/feature/products-addform
  );
}

export default InputImageField;
