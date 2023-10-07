import React from 'react'
import BigButton from './BigButton'

export default function AboutMe() {
  return (
    <div className='sectionGrey' id='about'>
      <article className='aboutBio'>
      <h1>Hi, <span className='textHighlight'>I'm Ben!</span></h1>
        <p>I am a Full stack web developer, experienced in designing mobile responsive sites, building and interacting with API’s and databases.</p>
        {/* <p>I have expertise in Python, JavaScript, React/React Native, HTML/CSS, Node, SQL, and GraphQL.</p> */}
        {/* <p>I am passionate about user experience and maximising performance. Currently I am developing my skills in AI and cybersecurity, with a view to embedding these into my work.  </p> */}
      </article>
      <a href='#projects' className='aboutLink'><BigButton text='Continue to view my portfolio' /></a>
    </div>
  )
}
