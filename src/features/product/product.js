import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './product.css'
import { fetchProduct } from './productSlice';

export function Product() {
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    dispatch(fetchProduct());

    const productList = useSelector(state => state.product);

    useEffect(() => {
        setProduct(productList.productList)
    }, [productList.productList]);
    
    console.log(product)

    const onProductListHandler = () => {
        return product.map((prd) => (
              <div className="column">
                 <div className="card">
                <img src={prd.imageUrl} alt='no' className='img'/>
                <p>{prd.text}</p>
                <p>{prd.id}</p>
                </div>
             </div>  
        ));
     };

    return(
        <div className="row">
            {onProductListHandler()}
            {/* <div className="column">
                <div className="card">
                <img src='https://react.semantic-ui.com/images/wireframe/image.png' alt='no' className='img'/>
                <p>nama</p>
                <p>harga</p>
                </div>
            </div>    */}
        </div>
    )
}

export default Product;