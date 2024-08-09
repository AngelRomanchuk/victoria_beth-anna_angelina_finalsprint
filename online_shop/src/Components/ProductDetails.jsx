import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByGroup } from './API';
import Header from './Header';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import AddToCart from './AddToCart';
import RandomProduct from './RandomProduct';

const ProductDetails = () => {
  const { group } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProductsByGroup = async () => {
      const data = await getProductsByGroup(group);
        setProducts(data);
        setLoading(false);
    };

    fetchProductsByGroup();
  }, [group]);

  useEffect(() => {
    if (products.length > 0) {
      setCurrentIndex(0); // Reset to the first product if available
    }
  }, [products]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  if (loading) return <div>Loading...</div>;
  if (products.length === 0) return <div>No products found for this group.</div>;

  const currentProduct = products[currentIndex];
  console.log(currentProduct.Image);

  return (
    <>
      <Header />
      <h1 className='h1ProductDetails'>Product Details</h1>
      <div className='ProductDetailsBox'>
        <VscChevronLeft
          className='ButtonPD'
          onClick={handlePrevious}
          disabled={products.length <= 1}
        />
        <div className='OrganizeDetails' key={currentProduct.serialNumber}>
          <img
            className='imgProductsDetails'
            src={process.env.PUBLIC_URL + currentProduct.Image}
            alt={currentProduct.name}
          />
          <div className='details'>
            <h2>{currentProduct.name}</h2>
            <p>#{currentProduct.serialNumber}</p>
            <p>{currentProduct.description}</p>
            <p>Price: ${currentProduct.price}</p>
            <button className='search-button'>Add To Wish List</button>
            <AddToCart product={currentProduct} />
          </div>
        </div>
        <VscChevronRight
          className='ButtonPD'
          onClick={handleNext}
          disabled={products.length <= 1}
        />
      </div>
      <RandomProduct mainText="Our Trends"/>
    </>
  );
};

export default ProductDetails;
