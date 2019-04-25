import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

function ExternalLink({ url, ...rest }) {
  // For rel="noreferrer", refer to
  // https://developers.google.com/web/tools/lighthouse/audits/noopener#recommendations
  return (
    <OutboundLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  )
}

export default ExternalLink
