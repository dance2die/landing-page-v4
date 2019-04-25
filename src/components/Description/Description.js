import React from 'react'

import './Description.scss'

function Description() {
  return (
    <div className="description">
      <h1 className="greeting">Hi, I am Sung.</h1>
      <article className="introduction">
        <section className="of-what">
          I am a <strong>Software Engineer</strong> living in New York City, the
          Big Apple 🍎.
        </section>
        <section className="of-current">
          I've working on mostly on backend but been more passionate on frontend
          lately.
        </section>
        <section className="of-love">
          Been living and breathing .NET & C# but felt in love with JavaScript
          lately. The library I've been working mostly is React.
        </section>
      </article>
      <article className="what I do">
        <section>
          I have been writing a blog and also been moderating on dev.to and also
          monitors the #react tag.
        </section>
        <section>
          You can find me on Twitter and also on Github and More to say? An
          email might work better.
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
