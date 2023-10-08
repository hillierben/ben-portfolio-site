import React from 'react'
import ProjectCard from './ProjectCard'

// images
import network from '../images/network2.png'
import commerce from '../images/commerce.png'
import savings from '../images/savings1.png'
import spelling from '../images/spelling1.png'
import wiki from '../images/wiki1.png'
import drums from '../images/drums.png'
import bfs from '../images/bfs.png'
  
export default function Projects() {
  return (
    <div className="sectionProj projectPage" id='projects'>
      <h1 className='projectH1'>Projects</h1>
      {/* <p className='projectP'>Take a look at some of my projects</p> */}
      <div className='projectList'>
        <a href='https://github.com/hillierben/network' target='_blank' rel='noreferrer'><ProjectCard image={network} title={'Network'} description={'Social Media Network'}/></a>
        <a href='https://github.com/hillierben/e-commerce' target='_blank' rel='noreferrer'><ProjectCard image={commerce} title={'Commerce'} description={'Ebay style e-commerce site'}/></a>
        <a href='https://github.com/hillierben/kids-saving-app-2' target='_blank' rel='noreferrer'><ProjectCard image={savings} title={'Kids Savings App'} description={'Savings app for kids to complete tasks and earn pocket money'}/></a>
        <a href='https://github.com/hillierben/spelling-sloth' target='_blank' rel='noreferrer'><ProjectCard image={spelling} title={'Spelling Sloth'} description={'Maths and English educational site for kids'}/></a>
        <a href='https://github.com/hillierben/wiki-style' target='_blank' rel='noreferrer'><ProjectCard image={wiki} title={'Wiki'} description={'Wikipedia style information app'}/></a>
        <a href='https://github.com/hillierben/js-drum-kit' target='_blank' rel='noreferrer'><ProjectCard image={drums} title={'Drum Kit'} description={'Playable browser-based drum kit'}/></a>
        <a href='https://github.com/hillierben/degrees' target='_blank' rel='noreferrer'><ProjectCard image={bfs} title={'Breadth First Search'} description={'Search alorithm for finding fastest route between two points'}/></a>
      </div>
    </div>
  )
}
