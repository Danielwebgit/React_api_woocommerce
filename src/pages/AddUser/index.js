import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { hideMessage,showMessage } from "../../store/ducks/layout";


export default function Add() {

    const [ form,setForm ] = useState({name:'',email:'',senha:'',rua:'',cep:'',numero:'',bairro:'',cidade:'', estado:''});

    const dispatch= useDispatch();

    function formChange(e) {
        setForm({ ...form,[e.target.name]: e.target.value })
        console.log(form)
    }

    function onSubmit(e) {

        e.preventDefault();

        dispatch(addUserFetchNovo( form ));
        setForm({name: '',email:'',senha:'',rua:'',cep:'',numero:'',bairro:'',cidade:'',estado:''});

        dispatch(showMessage());

        setTimeout(()=>{dispatch(hideMessage())},2500)
    }

    return (
        <form className="container mt-5" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Nome</label>
                <input onChange={formChange} type="text" name="name" className="form-control" placeholder="" value={form.name} />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input onChange={formChange} type="email" name="email" className="form-control" placeholder="" value={form.email}/>
            </div>
            <div className="form-group">
                <label>Senha:</label>
                <input onChange={formChange} type="password" name="senha" className="form-control" placeholder="" value={form.senha}/>
            </div>
            <div className="form-group">
                <label>Rua:</label>
                <input onChange={formChange} type="text" name="rua" className="form-control" placeholder="" value={form.rua}/>
            </div>
            <div className="form-group">
                <label>Cep:</label>
                <input onChange={formChange} type="text" name="cep" className="form-control" placeholder="" value={form.cep}/>
            </div>
            <div className="form-group">
                <label>Cep:</label>
                <input onChange={formChange} type="text" name="numero" className="form-control" placeholder="" value={form.numero}/>
            </div>
            <div className="form-group">
                <label>Bairro:</label>
                <input onChange={formChange} type="text" name="bairro" className="form-control" placeholder="" value={form.bairro}/>
            </div>
            <div className="form-group">
                <label>Cidade:</label>
                <input onChange={formChange} type="text" name="cidade" className="form-control" placeholder="" value={form.cidade}/>
            </div>
            <div className="form-group">
                <label>Estado:</label>
                <input onChange={formChange} type="text" name="estado" className="form-control" placeholder="..." value={form.estado}/>
            </div>
            <button type="submit" className="btn btn-primary">
                Adicionar
            </button>
        </form>
    );
}
