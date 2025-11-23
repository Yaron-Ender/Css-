// Central data structure for all subjects, principles, and projects
import Drop from "../projects/shadowing/drop/Drop";
import dropImage from "../projects/shadowing/drop/drop.png"
import CoffieCup from "../projects/shadowing/coffie-cup/CoffieCup"
import CoffieCupContent from "../projects/shadowing/coffie-cup/CoffieCupContent";
import coffieCupImg from "../projects/shadowing/coffie-cup/CoffieCup.png";
import Clock from "../projects/shadowing/clock/Clock"
import ClockContent from "../projects/shadowing/clock/ClockContent";
import clockImg from '../projects/shadowing/clock/clock.png'
// Import other images here as you add them
// import hoverEffectsImage from "./images/hover-effects.png";

export const shadowingData = {
  shadowing: {
    title: "Shadowing",
    principles: [
      {
        id:"1",
        title: "Box Shadow Basics",
        description: "Learn the fundamentals of box-shadow property",
        content:"",
      },
      {
        id:"2",
        title: "Coffie-cup",
        description: "Creating Coffie cup by using box shadow",
        content:CoffieCupContent,
        link:'https://www.youtube.com/watch?v=_jOqYe0eFqY&list=PL5e68lK9hEzcZLltZrc3NDlKWS3XygchY&index=1'
      },
      {
        id:"3",
        title: "Drop Shadows",
        description: "Realistic drop shadows for elements, the content is in the project",
       },
       {
        id:"4",
        title: "clock",
        description: "Creating Clock by boxshadow",
        content:ClockContent,
        link:'https://www.youtube.com/watch?v=LqtmWBYkhDY&list=PL7BfmKWHmO83NYzVE5LJwbloqtEa9oHaN'
      },
    ],
    projects: [
      {
        slug: "drop",
        title: "Drop",
        description: "createing drop with by shadow",
        img: dropImage, // Imported image - Vite will optimize it
       backgroudSize:'',

        component: Drop,
      },
      {
      slug: "coffie-cup",
      title: "Coffie Cup",
      description: "Creating a realistic coffee cup with shadows",
      img:coffieCupImg,
      backgroudSize:'',
      component:CoffieCup,
      },
      {
        slug: "clock",
        title: "Clock",
        description: "Clock-timer",
        img:clockImg,
        backgroudSize:'contain',
        component:Clock,
        },
    ],
  },
  // Add more subjects as needed
};

// Helper function to get subject data
export const getSubjectData = (subjectSlug) => {
  return shadowingData[subjectSlug] || null;
};

// Helper function to get all subject slugs for routing
export const getAllSubjectSlugs = () => {
  return Object.keys(shadowingData);
};
export const getShadowingPrinciple = () => {
  return shadowingData.shadowing.principles;
};
