import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import ProductItem from '../../components/productDetail';
import { useRouteMatch } from 'react-router-dom';
import productsApi from 'src/api/productApi';
import Loading from 'src/components/loading';
=======
import { useRouteMatch } from 'react-router-dom';
import productsApi from 'src/api/productApi';
import Loading from 'src/components/Loading';
import ProductItem from '../../components/productDetail';
>>>>>>> origin/feature/products-addform

ProductDetail.propTypes = {};

function ProductDetail(props) {
  const { params } = useRouteMatch();
  console.log({ params });
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await productsApi.getById(params.productId);
      console.log({ data });
      setLoading(false);
      setProduct(data);
    })();
    return () => {
      setProduct({});
    };
  }, [params.productId]);
  console.log({ product });

  // console.log('ehem');

  return (
    <div>
      {loading && <Loading />}
      {product && <ProductItem product={product} />}
    </div>
  );
}

export default ProductDetail;
