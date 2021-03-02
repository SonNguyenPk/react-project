import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import productsApi from 'src/api/productApi';
import ScrollToTop from 'src/components/ScrollToTop';
import ProductItem from '../../components/productDetail';

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

  const handleBuyClick = (data) => {
    console.log({ data });
  };

  // console.log('ehem');

  return (
    <div>
      {product && <ProductItem product={product} handleBuyClick={handleBuyClick} />}
      <ScrollToTop />
    </div>
  );
}

export default ProductDetail;
