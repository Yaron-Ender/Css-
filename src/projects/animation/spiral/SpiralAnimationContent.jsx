import React from 'react'

const SpiralAnimationContent = () => {
  return (
    <div>
 
   <ul>
      <li style={{marginBottom:'15px'}}><strong>CSS Custom Properties (Variables):</strong> The div and span elements use inline CSS variables (applied via JavaScript) that are consumed by CSS rules. This allows each element to have unique animation parameters without duplicating code. The same effect could be achieved using SCSS loops.</li>
      <li style={{marginBottom:'15px'}}><strong>Minimal DOM Markup:</strong> The structure uses nested elements with no explicit width/height. Each loader div contains 20 spans, and each span's ::before pseudo-element holds the actual visual circle (15px × 15px with border).</li>
      <li style={{marginBottom:'15px'}}><strong>Negative Animation Delays:</strong> The spiral effect is created using negative animation delays. Each span::before has a different negative delay, causing earlier elements to appear further ahead in the animation cycle than later ones—creating the spiral illusion.</li>
      <li><strong>Color Filter:</strong> The container applies `filter: hue-rotate(70deg)` to shift the base green (#00ff0a) to a different hue, creating the visual color palette for the animation.</li>
    </ul>
    </div>
  )
}

export default SpiralAnimationContent