import React, { useState, useEffect } from 'react';
import Header from './Header';

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
        <div>
            {products.length > 0 ? (
                <div>
                    <div>
                        <h2>{currentProduct.name}</h2>
                        <img 
                            src={`http://localhost:5000/${currentProduct.imgsrc}`} 
                            alt={currentProduct.name} 
                            style={{ width: '200px', height: 'auto' }} 
                        />
                        <p>{currentProduct.description}</p>
                        <p>Price: ${currentProduct.price}</p>
                    </div>
                    <div>
                        <button onClick={handlePrevious} disabled={products.length <= 1}>Previous</button>
                        <button onClick={handleNext} disabled={products.length <= 1}>Next</button>
                    </div>
                </div>
            ) : (
                <div>No products available</div>
            )}
        </div>
    );
};

export default ProductDetails;
