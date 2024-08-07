import React, { useState, useEffect } from 'react';
import Header from './Header';
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

const ProductDetails = () => {
    const [products, setProducts] = useState([]); // Assuming products is an array
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        // Fetchinfg products for future display
        const fetchProducts = async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            // Filter to get the right products only
            const filteredProducts = data.filter(product => product.group === 'nails');
            setProducts(filteredProducts);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    if (loading) return <div>Loading...</div>;
    const currentProduct = products[currentIndex];

    return (
        <>
            <Header />
            <h1 className='h1ProductDetails'>Product Details</h1>
            <div>
                {products.length > 0 ? (
                    <div className='ProductDetailsBox'> 
                        <VscChevronLeft className='ButtonPD' onClick={handlePrevious} disabled={products.length <= 1}/>
                        <div className='OrganizeDetails'>
                            <img 
                                className='imgProductsDetails'
                                src={`http://localhost:5000/${currentProduct.imgsrc}`} 
                                alt={currentProduct.name}  
                            />
                            <div className='detailsProductDetails'>
                                <h2>{currentProduct.name}</h2>
                                <p>{currentProduct.description}</p>
                                <p>Price: ${currentProduct.price}</p>
                            </div>
                        </div>
                        <VscChevronRight className='ButtonPD' onClick={handleNext} disabled={products.length <= 1} /> 
                    </div>
                ) : (
                    <div>No products available</div>
                )}
            </div>
        </>
    );
};

export default ProductDetails;
