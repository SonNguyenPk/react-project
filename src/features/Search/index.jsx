import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../products/components/productList';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

SearchPage.propTypes = {};

function SearchPage(props) {
  const searchResult = useSelector((state) => state.search);
  const searchList = searchResult?.searchResult?.data;

  console.log({ searchList });

  return (
    <Container>
      <h3>Search result</h3>
      <ProductList productList={searchList} />
    </Container>
  );
}

export default SearchPage;
