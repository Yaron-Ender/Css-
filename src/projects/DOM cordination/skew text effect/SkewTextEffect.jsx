import { useRef, useEffect,useState } from "react";
import "./skewTextEff.scss";

const SkewTextEffect = () => {
  const [documentWidth, setDocumentWidth] = useState(0);
  const containerRef = useRef(null);
  const rafRef = useRef(null);


  useEffect(() => {
    const updateWidth = () => {
      // noop here but ensures the effect registers resize listener
      return containerRef.current
      ? containerRef.current.clientWidth
      : document.documentElement.clientWidth;
    };
    if(containerRef.current){
      setDocumentWidth(containerRef.current.getBoundingClientRect().left);
}
    const onResize = () => updateWidth();
    window.addEventListener("resize", onResize);
    console.log(rafRef.current);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Mouse move handler scoped to this component. Normalizes pointer to -1..1
  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
   let x= (container.clientWidth - e.pageX - documentWidth) * 2 /2
    const layers = container.querySelectorAll(".layer");

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      layers.forEach((layer) => {
     
      layer.style.transform = `translateX(${-x}px)`;
      });
    });
  };

  return (
    <section
      className="skew-text-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="skew1">
        <h2 className="layer">Parallax text Effect</h2>
      </div>
      <div className="text-box">
        <div className="skew2">
          <h2 className="layer">Parallax text Effect</h2>
        </div>
      </div>
    </section>
  );
};

export default SkewTextEffect;
