import React  from 'react'

import Layout from './layouts'
import Pages from './pages'
import Message from "./components/message";

export default function App() {

    return (

            <Layout>
                <Message />
            <Pages />
            </Layout>
    )

}
