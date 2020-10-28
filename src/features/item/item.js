import React, { Component } from 'react';
import './item.css'

export default class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            productName: 'test',
            amount: 0,
            price: 0
        }
    }
    render() {
        const item = this.state;
        return(
            <div>
                <div className='card'>
                    <p>{item.productName} {item.amount}</p>
                </div>
                <button  className='btn'> empty cart </button> 
                <p className='price'>total price: Rp. {item.price}</p>
            </div>
        )
    }
}