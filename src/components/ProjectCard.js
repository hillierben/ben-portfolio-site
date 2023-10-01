
export default function ProjectCard({image, title, description}) {
  return (
    <div>
      <img src={image} alt={image}/>
      <div >
        <h1 >{title}</h1>
        <p>{description}</p>          
      </div>
    </div>
  )
}
