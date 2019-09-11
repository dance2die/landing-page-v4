import React from 'react'

import ExternalLink from '../ExternalLink'

import './Description.scss'

function Description() {
  return (
    <div className="description">
      <h1 className="greeting">
        👋 Hi, I am <strong>Sung</strong>
      </h1>
      <article className="introduction">
        <section className="of-what">
          I am a <strong>Software Engineer</strong> living in New York City, the
          Big Apple 🍎.
        </section>
        <section className="of-current">
          I've worked on mostly on <strong>backend</strong> and nowadays I am
          more passionate about <strong>frontend</strong>.
        </section>
        <section className="of-love">
          Fell in love 💖 with <strong>JavaScript</strong> & the library I've
          been working mostly is <strong>React</strong>.
        </section>
      </article>
      <article className="what I do">
        <section>
          I have been sharing what I've learned on a{' '}
          <ExternalLink url="https://sung.codes/">blog</ExternalLink> and is a{' '}
          <strong>moderator</strong> on{' '}
          <ExternalLink url="https://dev.to/dance2die">dev.to</ExternalLink>, an
          awesome online community for developers.
        </section>
        <section>
          As a bilingual Korean-American, I <strong>translate</strong> and{' '}
          <strong>proofread</strong>{' '}
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
          <ExternalLink url="https://github.com/dance2die">GitHub</ExternalLink>
          . More to say? An{' '}
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
