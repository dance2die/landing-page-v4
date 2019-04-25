import React from 'react'
import {
  FaTwitter,
  FaStackOverflow,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa'

import Avatar from '../Avatar'

import './AboutMe.scss'

const Name = () => <h2 className="name">Sung M. Kim</h2>
const Detail = () => (
  <div className="detail">
    <div>An Infinite Learner</div>
    <div>Currently focusing on Front-end development</div>
  </div>
)
const Social = () => (
  <div className="social">
    <FaTwitter />
    <FaInstagram />
    <FaEnvelope />
    <FaStackOverflow />
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
