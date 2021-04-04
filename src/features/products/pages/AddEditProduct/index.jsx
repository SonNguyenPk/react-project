import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import productsApi from 'src/api/productApi';
import ScrollToTop from 'src/components/ScrollToTop';
import AddEditForm from '../../components/AddEditForm';

AddEditProduct.propTypes = {};

function AddEditProduct(props) {
  const match = useRouteMatch();
  const { params } = match;
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    (async () => {
      if (params.productId) {
        try {
          const product = await productsApi.getById(params.productId);
          setSelectedProduct(product);
          console.log({ selectedProduct });
        } catch (error) {
          console.log('Fail to load product');
        }
      }
      return setSelectedProduct({
        name: '',
        description: '',
        salePrice: 0,
        originalPrice: 0,
        promotionPercent: 0,
        images: [],
      });
    })();
  }, [params]);

  const handleSubmit = async (formValue) => {
    try {
      console.log('formdata', formValue);
      // await productsApi.add(formValue);
    } catch (error) {}
  };
  return (
    <Container>
      <Box>
        <h2>Add new Product</h2>
        {selectedProduct && (
          <AddEditForm initialValues={selectedProduct} onSubmit={handleSubmit} />
        )}
        <ScrollToTop />
      </Box>
    </Container>
  );
}

export default AddEditProduct;
