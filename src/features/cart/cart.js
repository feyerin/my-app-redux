import React, { Component } from 'react'
import './cart.css'

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount : 0
        }
    }
    render(){
        const amount = this.state.amount
        return(
            <div className='segment'>
                <span> cart ({amount})</span>
            </div>
        )

    }
}