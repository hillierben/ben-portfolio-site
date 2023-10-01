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
    <div className="max-w-[1200px] mx-auto px-[3%]">
      <h1 className='mt-2'>Projects</h1>
      <div >
        <a href='/network'><ProjectCard image={network} title={'Network'} description={'doing and thing with a thing'}/></a>
        <a href='/commerce'><ProjectCard image={commerce} title={'Commerce'} description={'doing and thing with a thing'}/></a>
        <a href='savings'><ProjectCard image={savings} title={'Kids Savings App'} description={'doing and thing with a thing'}/></a>
        <a href='/spelling-sloth'><ProjectCard image={spelling} title={'Spelling Sloth'} description={'doing and thing with a thing'}/></a>
        <a href='/wiki'><ProjectCard image={wiki} title={'Wiki'} description={''}/></a>
        <a href='/drums'><ProjectCard image={drums} title={'Drum Kit'} description={''}/></a>
        <a href='/BFS'><ProjectCard image={bfs} title={'Breadth First Search'} description={''}/></a>
      </div>
    </div>
  )
}
