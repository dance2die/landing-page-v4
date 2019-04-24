import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import AboutMe from '../components/AboutMe'
import Description from '../components/Description'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['sung m. kim', 'dance2die', 'home']} />
    <AboutMe />
    <Description />
  </Layout>
)

export default IndexPage
