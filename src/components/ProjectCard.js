
export default function ProjectCard({image, title, description}) {
  return (
    <div className="projCard">
      <img src={image} alt={image} className="projImg"/>
      <div className="projTitle">
        <h1>{title}</h1>
        <p>{description}</p>    
        <p>Click to view Github Repo</p>          
      </div>
    </div>
  )
}
