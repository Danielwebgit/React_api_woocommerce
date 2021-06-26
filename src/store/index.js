import {configureStore}  from '@reduxjs/toolkit'


import clientsReducer from './ducks/loja'
import layoutReducer from './ducks/layout'
import authReducer from './ducks/auth'
import coinReducer from './ducks/coinsS'
import cartReducer from './ducks/cart'

export  default configureStore({
    reducer:{
        itens:clientsReducer,
        layout:layoutReducer,
        auth:authReducer,
        coins:coinReducer,
        cart: cartReducer 
    }
})
