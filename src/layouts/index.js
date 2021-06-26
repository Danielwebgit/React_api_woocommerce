import React, { Fragment } from 'react'
import Header from './Header'
import Content from './Content'
import './style.css'

export default ({ children }) => (
        <Fragment>
                <Header />
                <Content>{children}</Content>
        </Fragment>
)
