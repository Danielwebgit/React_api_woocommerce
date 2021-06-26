import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { hideMessage,showMessage } from "../../store/ducks/layout";

import { addUserFetch } from '../../store/fetchActions'


export default function Add() {

    const [ form,setForm ]= useState({name:'',email:'',password:'',price:''});

    const dispatch= useDispatch();

    function formChange(e) {
        setForm({ ...form,[e.target.name]: e.target.value })
        console.log(form)
    }

    function onSubmit(e) {

        e.preventDefault();

        dispatch(addUserFetch( form ));
        setForm({name: '',email:'',password:'',price:''});

        dispatch(showMessage());

        setTimeout(()=>{dispatch(hideMessage())},2500)
    }

    return (
        <form className="container mt-5" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Nome</label>
                <input onChange={formChange} type="text" name="name" className="form-control" placeholder="Nome..." value={form.name} />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input onChange={formChange} type="email" name="email" className="form-control" placeholder="Email" value={form.email}/>
            </div>
            <div className="form-group">
                <label>Senha:</label>
                <input onChange={formChange} type="password" name="password" className="form-control" placeholder="Senha" value={form.password}/>
            </div>
            <div className="form-group">
                <label>Senha:</label>
                <input onChange={formChange} type="text" name="price" className="form-control" placeholder="R$..." value={form.price}/>
            </div>
            <button type="submit" className="btn btn-primary">
                Adicionar
            </button>
        </form>
    );
}
