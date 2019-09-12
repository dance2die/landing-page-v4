/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon16 from '../images/favicon16.png'
import favicon32 from '../images/favicon32.png'
import seoImage from '../images/avatar-seo.jpg'

function SEO({ lang = 'en', keywords = [] }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            url
            twitterUsername
          }
        }
      }
    `
  )

  const seo = {
    title: site.defaultTitle,
    description: site.defaultDescription,
    image: seoImage,
    url: site.url,
    titleTemplate: site.titleTemplate,
    twitterUsername: site.twitterUsername,
    keywords: keywords.join(`, `),
  }

  // https://www.gatsbyjs.org/docs/add-seo-component/
  return (
    <Helmet
      htmlAttributes={{ lang }}
      titleTemplate={seo.titleTemplate}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${favicon16}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${favicon32}`,
        },
      ]}
    >
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   keywords: [],
//   description: null,
//   title: null,
//   image: null,
// }

// SEO.propTypes = {
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   description: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string,
// }

export default SEO
