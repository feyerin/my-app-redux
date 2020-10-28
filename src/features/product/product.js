import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from './productSlice';

import './product.css'
import { fetchProduct } from './productSlice';

export function Product() {
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    dispatch(fetchProduct());

    const productList = useSelector(state => state.product);

    console.log(productList);

    // setProduct((state) => {
    //     const currentState = [...state];
    //     currentState.push(productList.productList);
        
    //     return currentState;
    // });
        
    console.log('test', product)

    const onProductListHandler = () => {
        return product.map( (td) => (
        <span>{td.name}</span>
        ));
     };

    return(
        <div className="row">
            {/* {onProductListHandler()} */}
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