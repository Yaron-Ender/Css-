import Utilites from '../../utilites/Utilites'

const GridComp = ({rows,cols}) => {
    const {range} = Utilites()
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'1rem'}} >
    {range(rows).map((rowIndex)=>(
    <div key={rowIndex} style={{display:'flex',gap:'1rem'}}>
    {range(cols).map((colIndex)=>(
        <div key={colIndex} style={{flex:1,aspectRatio:'1/1',border:'1px solid white'}}>

        </div>
    ))}
    </div>
    ))}
    </div>
  )
}

export default GridComp