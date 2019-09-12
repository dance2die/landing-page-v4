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

function SEO({ lang, meta, keywords, description, title, image, pathname }) {
  const {
    site: {
      defaultTitle,
      defaultDescription,
      defaultImage,
      titleTemplate,
      siteUrl,
      twitterUsername,
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  )

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image || defaultImage}`,
    image: seoImage,
    url: `${siteUrl}${pathname || '/'}`,
    titleTemplate,
    twitterUsername,
  }

  // https://www.gatsbyjs.org/docs/add-seo-component/
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${seo.title}`}
      meta={[]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
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
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: `Sung M. Kim's home page`,
  title: 'Sung M. Kim (aka dance2die)',
  image: '/images/avatar.jpg',
  pathname: 'https://sungkim.co',
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  pathname: PropTypes.string,
}

export default SEO
