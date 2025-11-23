
const SubjectsLandingLayout = () => {
  return (
    <div className="subject-placeholder">
    <h2>Select a subject from the sidebar</h2>
    <p>Choose a CSS topic to explore principles and projects</p>
    <div
      style={{
        marginTop: "2rem",
        textAlign: "left",
        maxWidth: "600px",
        background: "#f8f9fa",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ marginTop: 0, color: "#333" }}>How to navigate:</h3>
      <ol style={{ color: "#666", lineHeight: "1.8" }}>
        <li>
          Click on any subject in the sidebar (e.g., "Shadowing",
          "Flexbox", "Grid")
        </li>
        <li>
          Two tabs will appear: <strong>"Principles"</strong> and{" "}
          <strong>"Projects"</strong>
        </li>
        <li>
          Click <strong>"Projects"</strong> tab to see all projects for
          that subject
        </li>
        <li>Click on any project card to view the project details</li>
      </ol>
    </div>
  </div>
  )
}

export default SubjectsLandingLayout