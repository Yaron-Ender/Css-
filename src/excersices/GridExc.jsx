import GridComp from './GridExc/GridComp'
function GridExc(){

 return(
  <div>
    <h3>Grid exercise</h3>
    <p>
    this dynamic grid is essentally made by flexbox. we use utility function called range to generate the number of rows and columns.
    </p>
    <GridComp rows={3} cols={10} />
  </div>
 )
}
export default GridExc