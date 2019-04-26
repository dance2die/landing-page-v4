import React from 'react'
import {
  FaTwitter,
  FaStackOverflow,
  FaInstagram,
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa'

import Avatar from '../Avatar'
import ExternalLink from '../ExternalLink'

// import background from '../../images/background.jpg'
import './AboutMe.scss'

const Name = () => <strong className="name">Sung M. Kim</strong>
const Detail = () => (
  <div className="detail">
    <div>A Software Engineer</div>
    <div className="of-what">
      <span className="and">&</span> <span>Infinite Learner</span>
    </div>
  </div>
)

const SocialLink = ({ url, children }) => (
  <ExternalLink url={url}>{children}</ExternalLink>
)

const Social = () => (
  <div className="social">
    <SocialLink url="https://twitter.com/dance2die">
      <FaTwitter />
    </SocialLink>
    <SocialLink url="https://github.com/dance2die">
      <FaGithub />
    </SocialLink>
    <SocialLink url="https://www.instagram.com/dance2die/">
      <FaInstagram />
    </SocialLink>
    <SocialLink url="https://stackoverflow.com/users/4035/sung-m-kim?tab=profile">
      <FaStackOverflow />
    </SocialLink>
    <SocialLink url="mailto:sungmkim80@gmail.com?Subject=Hey">
      <FaEnvelope />
    </SocialLink>
  </div>
)

function AboutMe() {
  return (
    <div className="about-me">
      <Avatar />
      <Name />
      <Detail />
      <Social />
    </div>
  )
}

export default AboutMe
