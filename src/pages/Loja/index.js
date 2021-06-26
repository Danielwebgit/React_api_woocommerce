import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Loja from '../../components/Produto';
import { addItem } from '../../store/ducks/cart'

import { getAllItens } from '../../store/fetchActions'

export default function List() {

    const itens = useSelector((state) => state.itens);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllItens())

    },[dispatch]);

    function addItemCart(item){
        dispatch(addItem(item))
       
    }

    return (
        <div className="container-fluid">
            <div className="row">{itens.map((item, index) => <Loja key={index} item={item} addItemCart={addItemCart} />)}</div>
        </div>
    );
}
