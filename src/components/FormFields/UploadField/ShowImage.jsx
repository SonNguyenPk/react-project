import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

ShowImages.propTypes = {
  file: PropTypes.object,
  initialImages: PropTypes.array,
  onRemoveInitial: PropTypes.func,
  onRemoveAdd: PropTypes.func,
  onChange: PropTypes.func,
};

ShowImages.defaultProps = {
  file: null,
  onRemoveInitial: null,
  onRemoveAdd: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function ShowImages({ file, initialImages, onRemoveInitial, onRemoveAdd, onChange }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      onClick={() => onChange([file, ...initialImages])} // onChange from controller component of react hook form to get value of images
    >
      <Grid item xs={12}>
        <Typography> Product Images</Typography>
      </Grid>
      {/* Show initial images */}
      <Grid item xs={12}>
        <GridList className={classes.gridList} cols={2}>
          {/* <GridListTile key="Subheader" cols={1}></GridListTile> */}
          {initialImages &&
            initialImages.map((Url, idxEdit) => (
              <GridListTile key={Url} spacing={1} cols={1} rows={2}>
                <img src={Url} alt={Url} />
                <GridListTileBar
                  title={idxEdit}
                  // subtitle={<span>size</span>}
                  actionIcon={
                    <IconButton
                      // aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      onClick={(e) => {
                        onRemoveInitial && onRemoveInitial(Url, idxEdit);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
        </GridList>
      </Grid>
      {/* Upload Images preview */}
      {file && (
        <Grid item xs={12}>
          <GridList className={classes.gridList} cols={2}>
            {/* <GridListTile key="Subheader" cols={2}></GridListTile> */}
            {file.fileImages.map((Url, idxAdd) => (
              <GridListTile key={Url} spacing={1} children="contain" cols={1} rows={2}>
                <img src={Url} alt={Url} />
                <GridListTileBar
                  title={file.fileNameArray[idxAdd]}
                  // subtitle={<span>size</span>}
                  actionIcon={
                    <IconButton
                      // aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      onClick={(e) => {
                        onRemoveAdd && onRemoveAdd(idxAdd);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      )}
    </Grid>
  );
}

export default ShowImages;
