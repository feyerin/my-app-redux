import React, { Component } from 'react';
import './cart.css';
import {connect} from 'react-redux';


class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount : 0
        }
    }
    render(){
        const counter = this.props.counter;
        console.log('counter', counter)
        return(
            <div className='segment'>
                <span> cart ({counter})</span>
            </div>
        )

    }
}

const mapStateToProps = state => {
    console.log('map to props',state.product.counter)
    return {counter: state.product.counter};
};

export default connect(mapStateToProps)(Cart);