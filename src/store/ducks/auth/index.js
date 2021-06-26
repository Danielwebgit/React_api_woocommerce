import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    //mandar o token para o back-end verificar se o token está válido
    isAuthenticated:localStorage.getItem('token')
}

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');

export default createReducer(INITIAL_STATE,{
[login.type]: (state, action) => ({ ...state,isAuthenticated: true }),
[logout.type]: (state, action) => ({ ...state,isAuthenticated: false })
})