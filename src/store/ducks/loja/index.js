import React from 'react';

import {createAction, createReducer} from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addLoja = createAction('ADD_ITEMS');


export default createReducer(INITIAL_STATE,{

    [addLoja.type]:( state,action ) => [ ...action.payload ]
});

