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
        return(
            <div className='segment'>
                <span> cart ({counter})</span>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {counter: state.product.counter};
};

export default connect(mapStateToProps)(Cart);