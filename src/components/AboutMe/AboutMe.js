import React from 'react'

import Avatar from '../Avatar'

import './AboutMe.scss'

const Title = () => <div>Title</div>
const Divider = () => <div>Divider</div>
const Detail = () => <div>Detail</div>
const Social = () => <div>Social</div>

function AboutMe() {
  return (
    <div className="about-me">
      <Avatar />
      <Title />
      <Divider />
      <Detail />
      <Social />
    </div>
  )
}

export default AboutMe
