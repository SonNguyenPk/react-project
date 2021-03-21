import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import productsApi from 'src/api/productApi';
import ScrollToTop from 'src/components/ScrollToTop';
import ProductItem from '../../components/productDetail';

ProductDetail.propTypes = {};

function ProductDetail(props) {
  const { params } = useRouteMatch();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await productsApi.getById(params.productId);
        setLoading(false);
        setProduct(data);
      } catch (error) {
        console.log('Fail to load product detail', error);
      }
    })();
    return () => {
      setProduct({});
    };
  }, [params.productId]);
  console.log({ product });

  return (
    <div>
      {product && <ProductItem product={product} />}
      <ScrollToTop />
    </div>
  );
}

export default ProductDetail;
