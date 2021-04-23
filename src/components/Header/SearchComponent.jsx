import { Button, fade, makeStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import { router } from 'src/utilise/routerLink';

SearchItem.propTypes = {
  handleOnChange: PropTypes.func,
};

SearchItem.defaultProps = {
  handleOnChange: null,
};

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  searchResult: {
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    zIndex: 99,
    '& button': {
      width: '100%',
      justifyContent: 'flex-start',
    },
  },
}));

function SearchItem({ handleOnChange, searchResult }) {
  const [value, setValue] = useState('');
  const debounce = _.debounce((q) => {
    handleOnChange(q);
  }, 500);
  const search = useCallback(debounce, []);

  const handleChange = (e) => {
    if (!handleOnChange) return;
    const searchValue = e.target.value;
    setValue(searchValue);
    search(searchValue);
  };

  const listSearchResult = (props) => {
    const { index, style } = props;
    return (
      <div style={style}>
        <Link
          style={{ textDecoration: 'none', color: 'black', flex: '1 0 auto' }}
          to={`${router.search}/${searchResult?.data?.[index]?.id}`}
          onClick={() => {
            setValue('');
          }}
        >
          <Button>{searchResult?.data?.[index]?.name}</Button>
        </Link>
      </div>
    );
  };
  const classes = useStyles();
  const searchList = (
    <div className={classes.searchResult}>
      <FixedSizeList height={400} width={300} itemSize={46} itemCount={10}>
        {listSearchResult}
      </FixedSizeList>
      <Link
        to={`search/q=${value}`}
        onClick={() => {
          setValue('');
        }}
      >
        <Button>Show all result</Button>
      </Link>
    </div>
  );

  // const debounce = _.debounce(handleChange, 200);

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => handleChange(e)}
        value={value}
      />
      {value && searchList}
    </div>
  );
}

export default SearchItem;
