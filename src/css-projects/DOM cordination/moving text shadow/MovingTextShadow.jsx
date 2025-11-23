import "./MovingTextShadow.scss";
import { useRef } from "react";

const MovingTextShadow = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null); // Option 1: useRef for text div
  const lightRef = useRef(null); // Option 1: useRef for light div

  const handleMouseMove = (e) => {
    if (containerRef.current && lightRef.current && textRef.current) {
      const container = containerRef.current;
      const elmLeftMargin = container.getBoundingClientRect().x;
      const elmLeftTopMargin = container.getBoundingClientRect().y;
      //   console.log({ elmLeftMargin, elmTopMargin });

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      lightRef.current.style.left = mouseX - elmLeftMargin + "px";
      lightRef.current.style.top = mouseY - elmLeftTopMargin + "px";
    
      const distanceX = mouseX - elmLeftMargin - textRef.current.offsetLeft - (textRef.current.offsetWidth / 2)
const distanceY = mouseY - elmLeftTopMargin - textRef.current.offsetTop - (textRef.current.offsetHeight / 2)

let newTextShadow = '';
for (let i=0;i<200;i++){
  let shadowX = -distanceX * (i/600);
  let shadowY =-distanceY *  (i/600);
  let opacity =1 - (i/100)
  newTextShadow += (newTextShadow?',':'') + shadowX + 'px ' + shadowY + 'px ' + '0 rgba(33,33,33,'+opacity+ ')'; 

}
textRef.current.style.textShadow = newTextShadow
    }
  };

  return (
    <main
      ref={containerRef}
      className="moving-text-shadow-container"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div ref={textRef} className="text">
        shadow
      </div>
      <div ref={lightRef} className="light"></div>
    </main>
  );
};

export default MovingTextShadow;
