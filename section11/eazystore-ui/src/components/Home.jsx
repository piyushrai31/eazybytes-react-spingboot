import React from 'react';
import PageHeading from './PageHeading';
import ProductListings from './ProductListings';
// import products from '../data/products';
import apiClient from '../api/apiClient';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Home() {
  const products = useLoaderData();
  // const [products, setProduct] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);


  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await apiClient.get("/products");
  //     setProduct(response.data);
  //   } catch (error) {
  //     setError(
  //       error.response?.data?.message ||
  //       "Failed to fetch products. Please try again"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <span className="text-xl font-semibold">Loading products...</span>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <span className="text-xl text-red-500">Error: {error}</span>
  //     </div>
  //   );
  // }


  return (
    <div className='max-w-[1152px] mx-auto px-6 py-8'>
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}

export async function productsLoader() {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || "Failed to fetch products. Please try again." , 
      {status: error.status || 500}
    )
  }
};