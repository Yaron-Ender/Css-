import clockStep1 from './clockStep1.png'
import clockStep2 from './clockStep2.png'

const ClockContent = () => {
  return (
   <ol>
    <li>step 1 - using before and after pseduo elements
    </li>
    <img src={clockStep1} alt="clockStep1" />
    <li>step 2 -depth ring formation is made by 4 box shadow 2 brigh and 2 darker, using inset for the inner parts</li>
    <img src={clockStep2} alt="clockStep2" />

   </ol>
  )
}

export default ClockContent