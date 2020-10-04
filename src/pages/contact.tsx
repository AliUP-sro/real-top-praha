import React from "react"

import Layout from "../components/layout"
import Header from '../contents/reusable/header'
import Partners from '../contents/reusable/partners'
import Footer from '../contents/reusable/footer'
import Contact from '../contents/contact'

const PartnersPage = () => {

  return (
    <Layout title='Kontakt'>
      <Header/>
      <Contact />
      <Partners />
      <Footer/>
    </Layout>
  )
}

export default PartnersPage
