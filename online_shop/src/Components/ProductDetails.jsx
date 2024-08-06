import React from 'react';
import {useState} from 'react';

const ProductDetails = () => {
    const [products, setProducts] = useState('');
    const [loading, setLoading] = useState(true);


    const fetchProduct = async () => {
        const res = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
    }


    return (
        <div>
        
        </div>
    )
}

export default ProductDetails
