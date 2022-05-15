import React from 'react';
import styled from 'styled-components';

import {Product} from './Product';

export const ProductList = ({ProductsData}) => {
  return (
    <ProductListWrapper>{createProducts(ProductsData)}</ProductListWrapper>
  );
};

const createProducts = ProductsList => {
  return ProductsList.map(productData => (
    <Product
      key={productData.id}
      title={productData.title}
      price={productData.price}
    />
  ));
};

const ProductListWrapper = styled.ul`
  padding: 10px;
  width: 60%;
  border-right: 5px solid black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
