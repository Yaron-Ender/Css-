import { useRef, useEffect } from 'react';
import './SpiralAnimation.scss';
const SpiralAnimation = () => {
  const spiralContainer = useRef(null);

  // Access the DOM node after the component mounts
  useEffect(() => {
 const container = spiralContainer.current;
 for(let j=0;j<4;j++){
     let loader = document.createElement('div')
    loader.classList.add('loader')
    loader.style.setProperty('--j',j)
    for(let i=0;i<20;i++){
      let spanEl = document.createElement('span')
      spanEl.style.setProperty('--i',i)
      loader.appendChild(spanEl) 
    }
    container.appendChild(loader)
 }
  }, []);
  return (
    <div className="spiral-container" ref={spiralContainer}>
   
  </div>
  )
}

export default SpiralAnimation