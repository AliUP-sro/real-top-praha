import React from "react"

import Layout from "../components/layout"
import Header from '../contents/reusable/header'
import Partners from '../contents/reusable/partners'
import Footer from '../contents/reusable/footer'

const PartnersPage = () => {

  return (
    <Layout title='Partneři'>
      <Header/>
      <Partners partnersPage />
      <Footer/>
    </Layout>
  )
}

export default PartnersPage
