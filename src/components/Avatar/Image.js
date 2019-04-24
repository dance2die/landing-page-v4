import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */
// https://github.com/gatsbyjs/gatsby/issues/9882#issuecomment-462089503
// https://github.com/gatsbyjs/gatsby/blob/26582d31ab14f7bac6d5738e4245ceca2e6d411d/packages/gatsby-transformer-sharp/src/fragments.js#L6
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 150) {
              base64
              width
              height
              src
              srcSet
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{ borderRadius: '50%' }}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    )}
  />
)
export default Image
