import React from "react";

const Tail3dEffectExplanation = () => {
  return (
    <div
      style={{
        padding: "20px",
        color: "#000",
        maxWidth: "800px",
        lineHeight: "1.6",
      }}
    >
      <h2 style={{ color: "#0066cc", marginBottom: "20px" }}>Tail 3D Effect</h2>

      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#0066cc", marginBottom: "15px" }}>Overview</h3>
        <p>
          The Tail 3D Effect creates an illusion of depth and dimension by
          rotating two face elements in 3D space. This effect demonstrates CSS
          3D transforms, perspective, and gradient overlays to create a
          realistic "tail" or continuation effect where one surface appears to
          extend backward from another, similar to a piece of paper or card
          being bent.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#0066cc", marginBottom: "15px" }}>How It Works</h3>
        <p>
          The animation consists of a container with two face elements
          positioned relative to each other:
        </p>
        <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
          <li>
            <strong>face-1</strong> - The front-facing surface (50vh height)
            that displays the pattern and gradient
          </li>
          <li>
            <strong>face-2</strong> - The rotated surface (100vh height) that
            creates the "tail" effect by rotating 70 degrees on the X-axis
            around the top origin
          </li>
        </ul>
        <p style={{ marginTop: "15px" }}>
          The container uses{" "}
          <code
            style={{
              background: "lightGray",
              padding: "2px 6px",
              borderRadius: "3px",
            }}
          >
            transform-style: preserve-3d
          </code>
          and{" "}
          <code
            style={{
              background: "lightGray",
              padding: "2px 6px",
              borderRadius: "3px",
            }}
          >
            perspective: 800px
          </code>{" "}
          to enable true 3D transformations, allowing the faces to be positioned
          in three-dimensional space rather than just on a flat plane.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#0066cc", marginBottom: "15px" }}>
          3D Transformation
        </h3>
        <p>
          The key to the tail effect is the rotation of <strong>face-2</strong>{" "}
          using
          <code
            style={{
              background: "lightGray",
              padding: "2px 6px",
              borderRadius: "3px",
            }}
          >
            transform: rotateX(70deg)
          </code>
          . By setting{" "}
          <code
            style={{
              background: "lightGray",
              padding: "2px 6px",
              borderRadius: "3px",
            }}
          >
            transform-origin: top
          </code>
          , the rotation happens around the top edge of the element, creating
          the appearance that face-2 is extending backward from the bottom of
          face-1.
        </p>
        <p style={{ marginTop: "15px" }}>
          The perspective property on the container creates the vanishing point
          effect, making the rotated face appear to recede into the distance,
          enhancing the 3D illusion.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#0066cc", marginBottom: "15px" }}>
          Shadow and Depth Effects
        </h3>
        <p>
          Both face elements use <strong>::before</strong> pseudo-elements with
          linear gradients to create depth and shadow:
        </p>
        <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
          <li>
            <strong>face-1::before</strong> - Positioned at the bottom with a
            gradient from black (rgba(0,0,0,0.5)) to transparent at 0deg,
            creating a shadow effect that suggests the face is casting a shadow
            onto face-2
          </li>
          <li>
            <strong>face-2::before</strong> - Positioned at the top with a
            gradient from black to transparent at 180deg, creating a shadow that
            suggests face-2 is receding into darkness
          </li>
        </ul>
        <p style={{ marginTop: "15px" }}>
          These gradients are positioned at 40% height of each face and create
          smooth transitions that enhance the illusion of depth and dimension.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#0066cc", marginBottom: "15px" }}>
          Background Pattern
        </h3>
        <p>
          Both faces use a combination of a repeating image pattern (check.jpg)
          and a linear gradient overlay. The background uses{" "}
          <code
            style={{
              background: "lightGray",
              padding: "2px 6px",
              borderRadius: "3px",
            }}
          >
            background-size: 100px 100px
          </code>
          to create a tiled pattern. The gradient overlay transitions from blue
          (rgba(0, 0, 255, 0.5)) to yellow (rgba(255, 255, 0, 0.5)), adding
          visual interest and color variation across the surfaces.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#0066cc", marginBottom: "15px" }}>
          Key CSS Techniques
        </h3>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>transform-style: preserve-3d</strong> - Enables true 3D
            transformations on child elements
          </li>
          <li>
            <strong>perspective</strong> - Creates a 3D viewing context with a
            vanishing point
          </li>
          <li>
            <strong>rotateX()</strong> - Rotates an element around the
            horizontal (X) axis
          </li>
          <li>
            <strong>transform-origin</strong> - Sets the point around which
            transformations occur (top edge in this case)
          </li>
          <li>
            <strong>Pseudo-elements (::before)</strong> - Creates
            shadow/gradient overlays without additional HTML
          </li>
          <li>
            <strong>Linear Gradients</strong> - Creates smooth shadow
            transitions and color overlays
          </li>
          <li>
            <strong>Background Layering</strong> - Combines image patterns with
            gradient overlays for rich visual effects
          </li>
          <li>
            <strong>Position: absolute</strong> - Allows precise positioning of
            pseudo-elements for shadow effects
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#0066cc", marginBottom: "15px" }}>
          Visual Effect
        </h3>
        <p>
          The combination of 3D rotation, perspective, and shadow gradients
          creates a compelling illusion where face-2 appears to extend backward
          from face-1, like a card or paper being folded. The height difference
          (face-1 is 50vh while face-2 is 100vh) ensures that face-2 extends
          beyond the viewport when rotated, creating a continuous "tail" effect.
        </p>
        <p style={{ marginTop: "15px" }}>
          The shadow gradients at the connection points (bottom of face-1 and
          top of face-2) enhance the separation between the two surfaces, making
          the 3D effect more pronounced and realistic.
        </p>
      </section>
    </div>
  );
};

export default Tail3dEffectExplanation;
