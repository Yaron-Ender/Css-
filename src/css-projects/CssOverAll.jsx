function CssOverAll() {
  return (
    <div className="css-overall">
      <h1>CSS Over All</h1>

      <section>
        <h2>Layout</h2>
        <ul>
          <li>Normal flow layout (containing blocks)</li>
          <li>Grid</li>
          <li>Flexbox</li>
          <li>@media</li>
          <li>
            Position
            <ul>
              <li>
                Top/left/right/bottom can define size if width/height not
                specified
              </li>
              <li>Relative — keeps original location in the flow</li>
              <li>
                Absolute — positioned relative to first ancestor with position:
                relative; taken out of normal flow; percentages measured from
                containing block; without dimensions fits to content
              </li>
            </ul>
          </li>
          <li>Overflow (default: visible)</li>
          <li>Stacking context (e.g. isolation: isolate)</li>
        </ul>
      </section>

      <section>
        <h2>Media queries</h2>
        <ul>
          <li>orientation: portrait / landscape</li>
          <li>hover: hover — apply when hover is supported</li>
          <li>
            pointer: none | coarse | fine — tests pointing device accuracy
          </li>
          <li>prefers-color-scheme</li>
          <li>prefers-reduced-motion</li>
        </ul>
      </section>

      <section>
        <h2>Measurements</h2>
        <ul>
          <li>Aspect-ratio calculations</li>
          <li>
            Using <code>calc()</code>, <code>min-content</code>,{" "}
            <code>max-content</code>
          </li>
          <li>Width vs max-width behavior</li>
        </ul>
      </section>

      <section>
        <h2>Text</h2>
        <ul>
          <li>Text-overflow (truncation)</li>
          <li>Writing-mode (vertical text, etc.)</li>
          <li>Line-height, direction (ltr / rtl)</li>
          <li>Word-break, hyphens, overflow-wrap: break-word</li>
          <li>White-space controls (can create horizontal scroll)</li>
          <li>shape-outside with float to wrap text around shapes</li>
        </ul>
      </section>

      <section>
        <h2>Image / background</h2>
        <ul>
          <li>Gradients (linear, radial, conic)</li>
        </ul>
      </section>

      <section>
        <h2>Functions & selectors</h2>
        <ul>
          <li>
            <code>attr()</code> — commonly used with <code>content</code> in
            pseudo-elements
          </li>
          <li>
            Combinators: <code>+</code>, <code>~</code>, <code>&gt;</code>
          </li>
          <li>
            Relational selectors: <code>:has()</code>, <code>:is()</code>,{" "}
            <code>:where()</code>
          </li>
        </ul>
      </section>

      <section>
        <h2>UI & cosmetic</h2>
        <ul>
          <li>Scrollbar styling and color-scheme (light/dark)</li>
          <li>
            Cursor and <code>pointer-events: none</code> (make element
            non-interactive)
          </li>
          <li>Mix-blend-mode, filter, backdrop-filter</li>
        </ul>
      </section>

      <section>
        <h2>Units</h2>
        <ul>
          <li>
            Viewport units: <code>vmin</code>, <code>vmax</code>,{" "}
            <code>vh</code>, etc.
          </li>
          <li>
            Font-relative: <code>rem</code> vs <code>em</code>
          </li>
        </ul>
      </section>

      <section>
        <h2>Effects & animations</h2>
        <ul>
          <li>
            Effects: <code>-webkit-box-reflect</code>,{" "}
            <code>shape-outside</code>
          </li>
          <li>Animation libraries: e.g. Animate.css</li>
          <li>
            <code>animation-play-state</code>: running | paused
          </li>
          <li>FLIP technique for layout animation (used by Framer Motion)</li>
        </ul>
      </section>

      <section>
        <h2>3D & transforms</h2>
        <ul>
          <li>
            Perspective, <code>transform-style: preserve-3d</code>,
            backface-visibility
          </li>
          <li>3D rendering context for children</li>
        </ul>
      </section>

      <section>
        <h2>Motion & path</h2>
        <ul>
          <li>
            <code>offset-path</code> with SVG paths (note: browser support and
            limitations)
          </li>
        </ul>
      </section>

      <section>
        <h2>SVG & Canvas</h2>
        <ul>
          <li>SVG presentation attributes and newer SVG2 features</li>
          <li>
            Canvas supports drawing primitives (rect, path); use JS for complex
            scenes
          </li>
        </ul>
      </section>

      <section>
        <h2>Misc</h2>
        <ul>
          <li>
            Other properties: <code>appearance</code> and small utilities
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CssOverAll;
