import React, {Component} from 'react';
import './item.css';
import {connect} from 'react-redux';
import {RESET}  from '../types' 


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountPrice: 0,
            totalPrice: 0,
            status: false,
        }
    }

    render() {
        const cart = this.props.cart;
        const totalPrice = this.props.totalPrice;

        return (
            <div>
                {(() => {
                    if (cart.length !== 0) {
                    return (
                        cart.map((item) => (
                            <div>
                                <div className='card'>
                                    <p>{item.name} - {item.counter}</p>
                                    <span>price: { this.state.amountPrice = item.price * item.counter}</span>
                                </div>
                            </div>
                        ))
                    )
                    } else {
                        return (
                            <div>
                                <div className='card'>
                                    <p>no item found</p>
                                </div>
                            </div>
                        )
                    }
                })()}
                <button
                    onClick={ () => 
                        this.props.resetItem() 
                        } 
                    className='btn'>
                    empty cart
                </button>
                <p className='price'>total price: Rp. {totalPrice}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.product.cart, 
        totalPrice: state.product.totalPrice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetItem: () => 
        dispatch({
            type: RESET,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
