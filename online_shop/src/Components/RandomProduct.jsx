import React from 'react';
import { useState, useEffect } from 'react';

const RandomProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:5000/products');
            const data = await response.json();
            
            // Assuming the data is an array of products
            // Shuffle array and get the first 3 products
            const shuffled = data.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 4);
            
            setProducts(selected);
            setLoading(false);
        };
    
        fetchProducts();
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }


    return (
        <div>
            <h1 className='h1ProductDetails'>Our Trends</h1>
            <div className='RandomProductsBox'>
                {products.map((product) => (
                    <div className='RandomProducts'>
                        <img 
                            className='imgRandom'
                            src={`http://localhost:5000/${product.imgsrc}`} 
                            alt={product.name}  
                        />
                        <div className='details'>
                            <h2>{product.name}</h2>
                            <p>Price: ${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RandomProduct;
