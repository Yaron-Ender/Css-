

const FlashingZigZagExpl = () => {
  return (
    <div style={{ padding: '20px', color: '#000', maxWidth: '800px', lineHeight: '1.6' }}>
      <h2 style={{ color: '#0f0', marginBottom: '20px' }}>Flashing Zigzag Animation</h2>
      
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#0f0', marginBottom: '15px' }}>Overview</h3>
        <p>
          The Flashing Zigzag animation creates a mesmerizing visual effect where green light beams 
          sweep across diamond-shaped elements in a cascading sequence. This animation demonstrates 
          advanced CSS techniques including pseudo-elements, keyframe animations, and staggered timing 
          to create a dynamic, eye-catching effect.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#0f0', marginBottom: '15px' }}>How It Works</h3>
        <p>
          The animation consists of two zigzag rows positioned on top of each other, with the second 
          row rotated 180 degrees to create a complete pattern. Each row contains four diamond-shaped 
          elements (squares rotated -45 degrees) that form the zigzag structure.
        </p>
        <p>
          Each diamond element uses two pseudo-elements to create the flashing effect:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li><strong>::before</strong> - Creates a horizontal green line that sweeps from left to right</li>
          <li><strong>::after</strong> - Creates a vertical green line that sweeps from top to bottom</li>
        </ul>
        <p style={{ marginTop: '15px' }}>
          These lines use linear gradients (from transparent to bright green #0f0) and animate across 
          their respective dimensions, creating the "flashing" effect as they pass through each diamond.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#0f0', marginBottom: '15px' }}>Animation Timing</h3>
        <p>
          The animation uses CSS custom properties (<code style={{ background: 'lightGray', padding: '2px 6px', borderRadius: '3px' }}>--i</code>) 
          to create staggered delays. Each diamond has a different delay value (0s, 1s, 2s, 3s), 
          causing them to light up in sequence rather than simultaneously. This creates a cascading 
          wave effect that travels along the zigzag pattern.
        </p>
        <p>
          Both animations run for 4 seconds with a linear timing function, ensuring smooth and 
          consistent movement. The horizontal line completes its sweep in the first 25% of the 
          animation, while the vertical line begins at 12.5% and completes at 37.5%, creating 
          a coordinated lighting effect.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#0f0', marginBottom: '15px' }}>Key CSS Techniques</h3>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Pseudo-elements (::before, ::after)</strong> - Used to create the animated light beams without additional HTML</li>
          <li><strong>CSS Custom Properties</strong> - Enables dynamic animation delays for each element</li>
          <li><strong>Transform Rotations</strong> - Creates the diamond shapes and zigzag pattern</li>
          <li><strong>Linear Gradients</strong> - Creates the smooth light beam effect</li>
          <li><strong>Keyframe Animations</strong> - Controls the precise timing and movement of the light beams</li>
          <li><strong>Overflow Hidden</strong> - Clips the light beams to the diamond boundaries</li>
        </ul>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#0f0', marginBottom: '15px' }}>Visual Effect</h3>
        <p>
          The combination of the staggered timing, dual-direction light sweeps, and the zigzag 
          pattern creates an illusion of light traveling along a path. The bright green color 
          (#0f0) against the dark background (#222) provides high contrast, making the animation 
          highly visible and attention-grabbing.
        </p>
        <p>
          Content can be placed in the center of each diamond (like the "CSS" letters and emoji 
          in the example), which remains visible while the light beams sweep around it, creating 
          a dynamic frame effect.
        </p>
      </section>
    </div>
  )
}

export default FlashingZigZagExpl