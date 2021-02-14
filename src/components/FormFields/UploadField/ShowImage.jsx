import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

ShowImages.propTypes = {
  file: PropTypes.object,
  initialImages: PropTypes.array,
  onRemoveInitial: PropTypes.func,
  onRemoveAdd: PropTypes.func,
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
    width: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function ShowImages({ file, initialImages, onRemoveInitial, onRemoveAdd }) {
  console.log({ file, initialImages });

  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      {/* Show initial images */}
      <Grid item>
        <GridList cellHeight={300} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            {/* <ListSubheader component="div">December</ListSubheader> */}
          </GridListTile>
          {initialImages &&
            initialImages.map((Url, idxEdit) => (
              <GridListTile key={Url}>
                <img src={Url} alt={Url} />
                <GridListTileBar
                  title={idxEdit}
                  // subtitle={<span>size</span>}
                  actionIcon={
                    <IconButton
                      // aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      onClick={(e) => {
                        e.stopPropagation();
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
      <Grid item>
        <GridList cellHeight={300} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            {/* <ListSubheader component="div">December</ListSubheader> */}
          </GridListTile>
          {file &&
            file.fileImages.map((Url, idxAdd) => (
              <GridListTile key={Url}>
                <img src={Url} alt={Url} />
                <GridListTileBar
                  title={file.fileNameArray[idxAdd]}
                  // subtitle={<span>size</span>}
                  actionIcon={
                    <IconButton
                      // aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      onClick={(e) => {
                        e.stopPropagation();
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
    </Grid>
  );
}

export default ShowImages;
