import React from "react";

const MovingTextShadowExplanation = () => {
  return (
    <div>
      <p>
        This demo tracks the mouse and updates both a floating light element and
        the text shadow. It relies on several DOM coordination techniques:
      </p>
      <ul>
        <li>
          <strong>useRef</strong>: Keeps live references to DOM nodes (`main`,
          `text`, `light`) so we can read/update them inside event handlers
          without re-rendering.
        </li>
        <li>
          <strong>Mouse events</strong>: `onMouseMove` delivers the cursor
          coordinates on every frame, acting as the trigger for all updates.
        </li>
        <li>
          <strong>getBoundingClientRect()</strong>: Reads the container&apos;s
          position relative to the viewport so we can translate cursor
          coordinates into element-local coordinates.
        </li>
        <li>
          <strong>offsetLeft/Top/Width/Height</strong>: Measure the text
          element&apos;s position and size, allowing us to compute distances
          from the cursor to the text center.
        </li>
        <li>
          <strong>Direct style updates</strong>: The light&apos;s `style.left`
          and `style.top` are set to follow the cursor, and we build a string
          for `textShadow` to render the layered glow trail.
        </li>
      </ul>
      <h4>the principle of that technique is to give the value of 0 to the center of the text or the page, right to the center is positive value and left to the center is nagative values</h4>
    </div>
  );
};

export default MovingTextShadowExplanation;
