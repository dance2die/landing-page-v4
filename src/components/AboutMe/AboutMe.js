import React from 'react'

import Avatar from '../Avatar'

import './AboutMe.scss'

const Name = () => <h2 className="name">Sung M. Kim</h2>
const Divider = () => <div className="divider">Divider</div>
const Detail = () => <div className="detail">Detail</div>
const Social = () => <div className="social">Social</div>

function AboutMe() {
  return (
    <div className="about-me">
      <Avatar />
      <Name />
      <Divider />
      <Detail />
      <Social />
    </div>
  )
}

export default AboutMe
