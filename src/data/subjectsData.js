// Central data structure for all subjects, principles, and projects
import Drop from "../css-projects/shadowing/drop/Drop";
export const subjectsData = {
  shadowing: {
    title: "Shadowing",
    principles: [
      {
        title: "Box Shadow Basics",
        content: "Learn the fundamentals of box-shadow property",
      },
      {
        title: "Layered Shadows",
        content: "Creating depth with multiple shadows",
      },
      { title: "Drop Shadows", content: "Realistic drop shadows for elements" },
    ],
    projects: [
      {
        slug: "drop",
        title: "3D Depth Cards",
        description: "Cards with realistic shadows creating depth",
        component: Drop,
      },
      {
        slug: "hover-effects",
        title: "Hover Shadow Effects",
        description: "Interactive shadow effects on hover",
      },
    ],
  },
  flexbox: {
    title: "Flexbox",
    principles: [
      { title: "Flex Container", content: "Understanding flex containers" },
      { title: "Flex Items", content: "Controlling flex items" },
      { title: "Alignment", content: "Aligning items with flexbox" },
    ],
    projects: [
      {
        slug: "navigation-bar",
        title: "Responsive Navbar",
        description: "Building responsive navigation with flexbox",
      },
      {
        slug: "card-layout",
        title: "Card Layout",
        description: "Creating flexible card layouts",
      },
    ],
  },
  grid: {
    title: "Grid Layout",
    principles: [
      { title: "Grid Container", content: "Setting up grid containers" },
      { title: "Grid Lines", content: "Working with grid lines" },
      { title: "Grid Areas", content: "Named grid areas" },
    ],
    projects: [
      {
        slug: "dashboard-layout",
        title: "Dashboard Layout",
        description: "Creating complex layouts with CSS Grid",
      },
      {
        slug: "image-gallery",
        title: "Image Gallery",
        description: "Responsive image gallery with grid",
      },
    ],
  },
  // Add more subjects as needed
};

// Helper function to get subject data
export const getSubjectData = (subjectSlug) => {
  return subjectsData[subjectSlug] || null;
};

// Helper function to get all subject slugs for routing
export const getAllSubjectSlugs = () => {
  return Object.keys(subjectsData);
};
