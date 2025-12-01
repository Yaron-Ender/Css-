import './glowing-ring.scss';
const GlowingRing = () => {
  return (
<section className="glowing-container">
  <div className="loader">
  <div className="circle-glowing-container"><span></span></div>
  <div className="circle-glowing-container"><span></span></div>
  <div className="circle-glowing-container"><span></span></div>
  <div className="circle-glowing-container"><i></i></div>
  <div className="circle-glowing-container"><i></i></div>
  <div className="circle-glowing-container"><i></i></div>
  </div>
</section>   
  )
}

export default GlowingRing