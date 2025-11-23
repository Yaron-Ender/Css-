import './dropStyle.css'

const Drop = ({title,description}) => {
  return (
    
    <main className="main-drop">
  <div>
    <h2>{title}</h2>
    <h3>{description}</h3>
    <p>there are 4 layers that make this effect:</p>
    <p>1. inset shadow at the top</p>
    <p>2. trasparent in the center</p>
    <p>3.inset with oposit color at the bottom</p>
    <p>4. shadow with the color of the upper inset shadow</p>
  </div>
    <div className="drops-container">
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
    </div>
    
    </main>
  )
}

export default Drop