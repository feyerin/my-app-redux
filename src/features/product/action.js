import axios from 'axios'
import { GET_DATA, ERROR_DATA } from '../types'

export const getProducts = () => async (dispatch) => {
    try {
        const endpoint = await axios.get('https://run.mocky.io/v3/27221b73-ef6c-47fa-994b-e9e6cd692641');
        dispatch({
            type: GET_DATA,
            payload: endpoint.data,
        });
    } catch (e) {
        dispatch({
            type:ERROR_DATA,
            payload: console.log(e)
        })
    }
}

export const getProductsAsync = () => (dispatch, getState) =>{
    axios.get('https://run.mocky.io/v3/27221b73-ef6c-47fa-994b-e9e6cd692641')
    .then(resp => {
        dispatch({
            type: GET_DATA,
            payload: resp.data,
        });
    })
    .catch(err => {
        dispatch({
            type:ERROR_DATA,
            payload: console.log(err)
        })
    });}

