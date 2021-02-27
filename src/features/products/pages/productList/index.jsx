import { Box, Button, ButtonGroup, LinearProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import productsApi from 'src/api/productApi';
import ScrollToTop from 'src/components/ScrollToTop';
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
    _limit: 8,
    _sort: 'updatedAt',
    _order: 'asc',
  });

  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const match = useRouteMatch();
<<<<<<< HEAD
  console.log({ location, match });
=======
>>>>>>> origin/feature/products-addform

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data, pagination } = await productsApi.getAll(filters);

        setLoading(false);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail to loading: ', error);
      }
    })();
  }, [filters]);

  const handleRemove = async (product) => {
    try {
      const message = `Are you sure to remove ${product.name}?`;
      if (window.confirm(message)) {
        await productsApi.remove(product.id);
      }
    } catch (error) {
      console.log(`Fail to delete ${product.name}`, error);
    }
  };

  const handleAddEdit = (product) => {};

  const totalPages = Math.ceil(pagination._totalRows / pagination._limit);

  const handlePaginationClick = (event, page) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const newFilters = { ...filters, _page: page };
    setFilters(newFilters);
  };

  // sort by time updated
  const handleAscSortByUpdated = () => {
    const newFilters = { ...filters, _page: 1, _sort: 'updatedAt', _order: 'asc' };
    setFilters(newFilters);
  };

  const handleDescSortByUpdated = () => {
    const newFilters = { ...filters, _page: 1, _sort: 'updatedAt', _order: 'desc' };
    setFilters(newFilters);
  };

  // sort by price

  const handleAscSortByPrice = () => {
    const newFilters = { ...filters, _page: 1, _sort: 'originalPrice', _order: 'asc' };
    setFilters(newFilters);
  };

  const handleDescSortByPrice = () => {
    const newFilters = { ...filters, _page: 1, _sort: 'originalPrice', _order: 'desc' };
    setFilters(newFilters);
  };

  return (
    <div>
      <Box mb={2} display="inline-block">
        <ButtonGroup disableElevation color="primary">
          <Button
            variant={
              filters._order === 'asc' && filters._sort === 'updatedAt'
                ? 'contained'
                : 'outlined'
            }
            onClick={handleAscSortByUpdated}
          >
            Newest
          </Button>

          <Button
            variant={
              filters._order === 'desc' && filters._sort === 'updatedAt'
                ? 'contained'
                : 'outlined'
            }
            onClick={handleDescSortByUpdated}
          >
            Oldest
          </Button>
        </ButtonGroup>
      </Box>

      <Box ml={3} display="inline-block">
        <ButtonGroup disableElevation color="primary">
          <Button
            variant={
              filters._order === 'desc' && filters._sort === 'originalPrice'
                ? 'contained'
                : 'outlined'
            }
            onClick={handleDescSortByPrice}
          >
            Highest
          </Button>

          <Button
            variant={
              filters._order === 'asc' && filters._sort === 'originalPrice'
                ? 'contained'
                : 'outlined'
            }
            onClick={handleAscSortByPrice}
          >
            Cheapest
          </Button>
        </ButtonGroup>
      </Box>

      {loading && (
        <Box mt={2} mb={2}>
          <LinearProgress />
        </Box>
      )}

      <ProductList
        productList={productList}
        onRemove={handleRemove}
        onAddEdit={handleAddEdit}
      />
      <Box mt={4} mb={4} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          hidePrevButton={pagination._page <= 1}
          hideNextButton={pagination._page >= totalPages}
          color="primary"
          page={filters._page}
          onChange={handlePaginationClick}
        />
      </Box>
      <ScrollToTop />
    </div>
  );
}

export default ProductsData;
