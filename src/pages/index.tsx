import React from "react"

import Layout from "../components/layout"
import Header from '../contents/reusable/header'
import About from '../contents/home/about'
import Events from '../contents/home/events'
import Partners from '../contents/reusable/partners'
import Footer from '../contents/reusable/footer'
import Instagram from '../contents/home/instagram'
import FbTwitter from '../contents/home/facebookTwitter'

const IndexPage = () => {

  return (
    <Layout title='O klubu'>
      <Header/>
      <About/>
      <Instagram/>
      <FbTwitter />
      <Events/>
      <Partners />
      <Footer/>
    </Layout>
  )
}

export default IndexPage
