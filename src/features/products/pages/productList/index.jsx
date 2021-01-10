import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import productsApi from 'src/api/productApi';
import ProductList from '../../components/productList';

ProductsData.propTypes = {};
const filters = {
  _page: 1,
  _limit: 10,
};

function ProductsData() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await productsApi.getAll(filters);
      console.log({ data });
      setProductList(data);
    })();
  }, [filters]);

  return (
    <div>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductsData;
