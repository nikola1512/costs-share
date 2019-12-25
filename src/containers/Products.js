import React from 'react';
import LayoutAuth from "../components/LayoutAuth";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <LayoutAuth
      heading={
        <h1>Products</h1>
      }
    >
      <ul>
        <li Style="display: inline-block; margin: 2rem;">
          <ProductCard/>
        </li>
        <li Style="display: inline-block; margin: 2rem;">
          <ProductCard/>
        </li>
      </ul>
    </LayoutAuth>
  );
};

export default Products;
