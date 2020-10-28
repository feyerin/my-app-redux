import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './product.css'
import { fetchProduct } from './productSlice';

export default class Product extends Component {
    constructor(props){
        super(props);

        this.onProductListHandler = this.onProductListHandler.bind(this)
    }

    onProductListHandler() {
        return 
              <div className="column">
                 <div className="card">
                <img src="https://react.semantic-ui.com/images/wireframe/image.png" alt='no' className='img'/>
                <p>product name</p>
                <p>product price</p>
                </div>
             </div>  
    };

    render() {
        return (
            <div className="row">
            {this.onProductListHandler()}
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
}

