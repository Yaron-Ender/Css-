import './flashing-zigzag.scss';

const FlashingZigZag = () => {
  return (
    <div className="zigzag-container">
        <div className="zigzag">
          <div style={{'--i':'0'}}><span><b>C</b></span></div>
          <div style={{'--i':'1'}}><span><b>S</b></span></div>
          <div style={{'--i':'2'}}><span><b>S</b></span></div>
          <div style={{'--i':'3'}}><span><b>🧡</b></span></div>
        </div>
        <div class="zigzag">
          <div style={{'--i':'0'}}></div>
          <div style={{'--i':'1'}}></div>
          <div style={{'--i':'2'}}></div>
          <div style={{'--i':'3'}}></div>
        </div>
      </div>
  )
}

export default FlashingZigZag