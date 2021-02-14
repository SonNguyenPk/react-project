import { Box, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
      setInitialImages(newImages);
    }
  };

  const handleRemoveAdd = (idxAdd) => {
    console.log({ idxAdd });
    if (idxAdd >= 0) {
      const newFilesImage = { ...filesImage };
      newFilesImage.fileImages.splice(idxAdd, 1);
      newFilesImage.fileNameArray.splice(idxAdd, 1);
      newFilesImage.fileImageDetail.splice(idxAdd, 1);

      console.log({ newFilesImage });
      setFilesImage(newFilesImage);
    }
  };

  return (
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
              style={{ display: 'none' }}
              multiple
              id="upFile"
              type="file"
              onChange={handleOnChange}
            />
            <label htmlFor="upFile">
              <Tooltip title="Chosen a file" aria-label="add">
                <Box className={classes.button}>
                  <AddIcon />
                </Box>
              </Tooltip>
            </label>
          </Box>
        )}
      />
    </div>
  );
}

export default InputImageField;
