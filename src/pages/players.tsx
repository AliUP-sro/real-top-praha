import React from "react"

import Layout from "../components/layout"
import Header from '../contents/reusable/header'
import Footer from '../contents/reusable/footer'
import List from '../contents/players/list'
import Partners from '../contents/reusable/partners'

const PlayersPage = () => {

    return (
        <Layout title='Hráči'>
            <Header />
            <List />
            <Partners />
            <Footer />
        </Layout>
    )
}

export default PlayersPage
