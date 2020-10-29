import {bindActionCreators} from '@reduxjs/toolkit';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts, getProductsAsync} from './action';
import { ADD_DATA, ADD_COUNTER } from '../types' 
import './product.css'


class Product extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const {product} = this.props.product;
        return (
            <div className="row">
                {
                    product.map((prd) => (
                        <div onClick={ () => 
                            this.props.addCounter() 
                            } className="column">
                            <div 
                                key={prd.id}
                                className="card"
                                onClick= { () => 
                                    this.props.addCart(
                                        prd.id,
                                        prd.name,
                                        prd.price,
                                        prd.imageUrl
                                    )}
                            >
                                <img src={prd.imageUrl} alt='no' className='img'/>
                                <p>{prd.name}</p>
                                <p>Rp. {prd.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {product: state.product};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: bindActionCreators(getProductsAsync, dispatch),
        addCart: ( id, name, price, imageUrl) => 
        dispatch({
            type: ADD_DATA,
            payload: {
                id: id,
                name: name,
                price: price,
                url: imageUrl,
                counter: 1
            }
        }),
        addCounter: () => 
        dispatch({
            type: ADD_COUNTER,
            payload: {
                counter: 1
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
