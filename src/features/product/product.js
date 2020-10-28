import {bindActionCreators} from '@reduxjs/toolkit';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from './action';
import { ADD_DATA } from '../types' 
import './product.css'


class Product extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const {product} = this.props.product;
        return (
            <div className="row">
                {
                    product.map((prd) => (
                        <div className="column">
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
        getProducts: bindActionCreators(getProducts, dispatch),
        addCart: ( id, name, price, imageUrl) => 
        dispatch({
            type: ADD_DATA,
            payload: {
                id: id,
                name: name,
                price: price,
                url: imageUrl
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
