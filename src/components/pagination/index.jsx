import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

PaginationComponent.propTypes = {
  pagination: PropTypes.object,
  handleClickNextPage: PropTypes.func,
  handleClickPrePage: PropTypes.func,
};

PaginationComponent.defaultProps = {
  handleClickPrePage: null,
  handleClickNextPage: null,
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function PaginationComponent(props) {
  const classes = useStyles();
  const { pagination, handleClickNextPage, handleClickPrePage } = props;
  const totalPages = Math.ceil(pagination._totalRows / pagination._limit);
  console.log(totalPages);

  return (
    <div>
      <div className={classes.root}>
        <Pagination count={totalPages} color="secondary" />
      </div>
    </div>
  );
}

export default PaginationComponent;
