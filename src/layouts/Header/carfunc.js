import React , { Component } from 'react';
import { useSelector ,useDispatch} from 'react-redux'

export default function Cartfunc(){
    const length = useSelector(state => state.cart.length)
}