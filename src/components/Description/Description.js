import React from 'react'

import ExternalLink from '../ExternalLink'

import './Description.scss'

function Description() {
  return (
    <div className="description">
      <h1 className="greeting">👋 Hi, I am Sung</h1>
      <article className="introduction">
        <section className="of-what">
          I am a <strong>Software Engineer</strong> living in New York City, the
          Big Apple 🍎.
        </section>
        <section className="of-current">
          I've working on mostly on backend and nowadays I am more passionate on
          frontend.
        </section>
        <section className="of-love">
          Felt in love 💖 with JavaScript & the library I've been working mostly
          is React.
        </section>
      </article>
      <article className="what I do">
        <section>
          I have been writing a{' '}
          <ExternalLink url="https://www.slightedgecoder.com/">
            blog
          </ExternalLink>{' '}
          and is a site-wise moderator on{' '}
          <ExternalLink url="https://dev.to/dance2die">dev.to</ExternalLink>, an
          awesome online community for developers.
        </section>
        <section>
          As a bilingual Korean-American, I translate and proofread{' '}
          <ExternalLink url="https://allcontributors.org/">
            All Contributors
          </ExternalLink>{' '}
          project.
        </section>
        <section>
          You can find me on{' '}
          <ExternalLink url="https://twitter.com/dance2die">
            Twitter
          </ExternalLink>{' '}
          and also on{' '}
          <ExternalLink url="https://github.com/dance2die">GitHub</ExternalLink>{' '}
          and More to say? An{' '}
          <ExternalLink url="sungmkim80@gmail.com?Subject=Hey">
            email
          </ExternalLink>{' '}
          might work better.
        </section>
      </article>
      <footer>
        © {new Date().getFullYear()} Sung M. Kim, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Description
