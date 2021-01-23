import { Box, Button, ButtonGroup, LinearProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import productsApi from 'src/api/productApi';
import ProductList from '../../components/productList';

ProductsData.propTypes = {};

function ProductsData() {
  const [productList, setProductList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    _sort: 'updatedAt',
    _order: 'asc',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data, pagination } = await productsApi.getAll(filters);
        console.log(data, pagination);
        setLoading(false);

        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail to loading: ', error);
      }
    })();
  }, [filters]);

  const totalPages = Math.ceil(pagination._totalRows / pagination._limit);

  const handleClick = (event, page) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    console.log({ event, page });
    const newFilters = { ...filters, _page: page };
    setFilters(newFilters);
  };

  const handleAscSortByUpdated = () => {
    const newFilters = { ...filters, _page: 1, _order: 'asc' };
    setFilters(newFilters);
  };

  const handleDescSortByUpdated = () => {
    const newFilters = { ...filters, _page: 1, _order: 'desc' };
    setFilters(newFilters);
  };

  return (
    <div>
      <Box mb={2}>
        <ButtonGroup disableElevation color="primary">
          <Button
            variant={filters._order === 'asc' ? 'contained' : 'outlined'}
            onClick={handleAscSortByUpdated}
          >
            Newest
          </Button>

          <Button
            variant={filters._order === 'desc' ? 'contained' : 'outlined'}
            onClick={handleDescSortByUpdated}
          >
            Oldest
          </Button>
        </ButtonGroup>
      </Box>
      {loading && (
        <Box mt={2} mb={2}>
          <LinearProgress />
        </Box>
      )}

      <ProductList productList={productList} />
      <Box mt={4} mb={4} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          hidePrevButton={pagination._page <= 1}
          hideNextButton={pagination._page >= totalPages}
          color="primary"
          page={filters._page}
          onChange={handleClick}
        />
      </Box>
    </div>
  );
}

export default ProductsData;
