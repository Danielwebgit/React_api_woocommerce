import api from '../../services/api.js'
import api_woocom from '../../services/api_wp.js'
import { addLoja } from "../ducks/loja/index";
import { login } from '../ducks/auth'

export const getAllItens = () => {
    return dispatch  => {
        api_woocom
        .getProducts().then((res) =>{
            console.log(res);
        dispatch(addLoja(res.data))
        })
        .catch(console.log)
        }
};

export const authLogin = ( user ) =>{
    return ( dispatch ) => {
        api.post('/token/',user).then(res => {
            localStorage.setItem('token',res.data.access_token)
            dispatch(login());
            window.location.pathname='/loja';
        }).catch(console.log);
    }
};
